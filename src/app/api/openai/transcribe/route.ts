import { NextResponse } from "next/server";
import fs from "fs";
import OpenAI from "openai";
import { Readable } from "stream";

// API anahtarı var mı kontrol et
const isOpenAIConfigured = process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.length > 0;

// OpenAI istemcisini koşullu olarak oluştur
const openai = isOpenAIConfigured ? new OpenAI() : null;

export async function POST(req: Request) {
  // API anahtarı yoksa hata döndür
  if (!isOpenAIConfigured || !openai) {
    return NextResponse.json(
      { 
        error: "OpenAI API anahtarı yapılandırılmamış. Lütfen Vercel'de OPENAI_API_KEY çevre değişkenini ekleyin.",
        text: "OpenAI API anahtarı eksik olduğu için ses dosyası işlenemedi."
      },
      { status: 400 }
    );
  }

  const body = await req.json();
  const base64Audio = body.audio;

  // Convert the base64 audio data to a Buffer
  const audio = Buffer.from(base64Audio, "base64");

  // Define the file path for storing the temporary WAV file
  const filePath = "tmp/input.wav";

  try {
    // Tmp klasörünün var olduğundan emin ol
    if (!fs.existsSync("tmp")) {
      fs.mkdirSync("tmp", { recursive: true });
    }

    // Write the audio data to a temporary WAV file synchronously
    fs.writeFileSync(filePath, audio);

    // Create a readable stream from the temporary WAV file
    const readStream = fs.createReadStream(filePath);

    const transcription = await openai.audio.transcriptions.create({
      file: readStream as unknown as File,
      model: "whisper-1",
    });

    // Remove the temporary file after successful processing
    fs.unlinkSync(filePath);

    return NextResponse.json(transcription);
  } catch (error) {
    console.error("Error processing audio:", error);
    
    // Hata durumunda geçici dosyayı temizlemeye çalış
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (cleanupError) {
      console.error("Error cleaning up temporary file:", cleanupError);
    }
    
    return NextResponse.json(
      { error: "Ses dosyası işlenirken bir hata oluştu.", details: error },
      { status: 500 }
    );
  }
}
