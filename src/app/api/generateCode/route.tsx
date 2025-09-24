import { NextResponse } from 'next/server';
import codegen from 'postman-code-generators';
import { Request as PostmanRequest } from 'postman-collection';

interface Header {
  key: string;
  value: string;
}

interface GenerateCodeRequest {
  method: string;
  url: string;
  headers?: { key: string; value: string }[];
  body?: string;
  bodyType?: 'json' | 'text';
  language: string;
  variant: string;
  locale?: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const bodyData = (await req.json()) as GenerateCodeRequest;
    const { method, url, headers, body, bodyType, language, variant } = bodyData;

    if (!method || !url) {
      return NextResponse.json({ snippet: '' });
    }

    const formattedHeaders: Header[] = headers?.filter((h) => h.key.trim() && h.value.trim()) || [];

    if (body) {
      const type = bodyType === 'text' ? 'text/plain' : 'application/json';

      if (!formattedHeaders.some((h) => h.key.toLowerCase() === 'content-type')) {
        formattedHeaders.push({ key: 'Content-Type', value: type });
      }
    }

    const postmanRequest = new PostmanRequest({
      url,
      method,
      body: body ? { mode: 'raw', raw: body } : undefined,
    });

    formattedHeaders.forEach((header) => postmanRequest.addHeader(header));

    return new Promise((resolve) => {
      codegen.convert(language.toLowerCase(), variant, postmanRequest, { pretty: true }, (error, snippet) => {
        if (error || !snippet) {
          console.error('Error:', error);
          resolve(
            NextResponse.json({
              snippet: '',
            })
          );
        } else {
          resolve(NextResponse.json({ snippet }));
        }
      });
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      snippet: '',
    });
  }
}
