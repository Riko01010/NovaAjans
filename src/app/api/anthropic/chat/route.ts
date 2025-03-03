import { anthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, streamText } from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

// API anahtarı var mı kontrol et
const isAnthropicConfigured = process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY.length > 0;

export async function POST(req: Request) {
  // API anahtarı yoksa hata döndür
  if (!isAnthropicConfigured) {
    return NextResponse.json(
      { 
        error: "Anthropic API anahtarı yapılandırılmamış. Lütfen Vercel'de ANTHROPIC_API_KEY çevre değişkenini ekleyin.",
        text: "Anthropic API anahtarı eksik olduğu için sohbet işlenemedi."
      },
      { status: 400 }
    );
  }

  try {
    const { messages } = await req.json();
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20240620"),
      messages: convertToCoreMessages(messages),
      system: "You are a helpful AI assistant",
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in Anthropic chat:", error);
    return NextResponse.json(
      { error: "Anthropic sohbet işlenirken bir hata oluştu.", details: error },
      { status: 500 }
    );
  }
}
