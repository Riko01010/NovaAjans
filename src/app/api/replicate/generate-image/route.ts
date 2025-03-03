import { NextResponse } from "next/server";
import Replicate from "replicate";

// API anahtarı var mı kontrol et
const isReplicateConfigured = process.env.REPLICATE_API_TOKEN && process.env.REPLICATE_API_TOKEN.length > 0;

// Replicate istemcisini koşullu olarak oluştur
const replicate = isReplicateConfigured
  ? new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    })
  : null;

export async function POST(request: Request) {
  // API anahtarı yoksa hata döndür
  if (!isReplicateConfigured || !replicate) {
    return NextResponse.json(
      {
        error: "Replicate API anahtarı yapılandırılmamış. Lütfen Vercel'de REPLICATE_API_TOKEN çevre değişkenini ekleyin.",
        output: null,
      },
      { status: 400 }
    );
  }

  try {
    const { prompt } = await request.json();

    const output = await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt: prompt,
          image_dimensions: "512x512",
          num_outputs: 1,
          num_inference_steps: 50,
          guidance_scale: 7.5,
          scheduler: "DPMSolverMultistep",
        },
      }
    );

    return NextResponse.json({ output }, { status: 200 });
  } catch (error) {
    console.error("Error from Replicate API:", error);
    return NextResponse.json({ error: (error as Error).message, output: null }, { status: 500 });
  }
}
