export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
export interface ContactSubmission extends ContactFormPayload {
  id: string;
  ts: number; // epoch millis
}