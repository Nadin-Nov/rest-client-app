declare module 'postman-code-generators' {
  interface Request {
    method: string;
    url: string | object;
    header?: { key: string; value: string }[];
    body?: { mode: string; raw?: string };
  }

  interface Codegen {
    convert(
      language: string,
      variant: string,
      request: Request,
      options: object,
      callback: (error: Error | null, snippet?: string) => void
    ): void;
  }

  const codegen: Codegen;
  export default codegen;
}
