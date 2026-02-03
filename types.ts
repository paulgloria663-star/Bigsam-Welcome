
export interface TastyTaleResult {
  content: string;
  error?: string;
}

export interface GeminiConfig {
  model: string;
  systemInstruction: string;
}
