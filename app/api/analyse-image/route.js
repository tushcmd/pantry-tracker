
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENROUTER_API_KEY });


export async function POST(request) {
  try {
    const { imageUrl } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What food item is in this image? Provide the name and estimate its expiration date based on typical shelf life. Format the response as JSON with 'name' and 'expirationDate' fields." },
            { type: "image_url", image_url: imageUrl },
          ],
        },
      ],
    });

    const result = JSON.parse(response.choices[0].message.content);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error analyzing image:', error);
    return NextResponse.json({ error: 'Failed to analyze image' }, { status: 500 });
  }
}