import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";
import { NextResponse } from "next/server";
import { NOVA_SYSTEM_PROMPT } from "@/lib/constants";

export const runtime = "edge";

// API anahtarı var mı kontrol et
const isOpenAIConfigured = process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.length > 0;

export async function POST(req: Request) {
  // API anahtarı yoksa hata döndür
  if (!isOpenAIConfigured) {
    return NextResponse.json(
      { 
        error: "OpenAI API anahtarı yapılandırılmamış. Lütfen Vercel'de OPENAI_API_KEY çevre değişkenini ekleyin.",
        text: "OpenAI API anahtarı eksik olduğu için sohbet işlenemedi."
      },
      { status: 400 }
    );
  }

  try {
    const { messages } = await req.json();
    const result = await streamText({
      model: openai("gpt-4o"),
      messages: convertToCoreMessages(messages),
      system: NOVA_SYSTEM_PROMPT,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in OpenAI chat:", error);
    return NextResponse.json(
      { error: "OpenAI sohbet işlenirken bir hata oluştu.", details: error },
      { status: 500 }
    );
  }
}
