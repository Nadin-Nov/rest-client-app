export interface HistoryItem {
  id: string;
  method: string;
  url: string;
  status: number | null;
  timestamp: string;
  duration?: number;
  requestSize?: number;
  responseSize?: number;
  errorDetails?: string;
}
