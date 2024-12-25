export interface User {
  id: string;
  name: string;
  email: string;
  colorProgress: Record<string, number>;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'elder';
  elderName?: string;
  timestamp: Date;
}

export interface Elder {
  name: string;
  color: string;
  description: string;
  avatar: string;
}