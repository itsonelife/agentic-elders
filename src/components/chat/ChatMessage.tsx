import { ChatMessage as ChatMessageType } from '@/types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isElder = message.sender === 'elder';

  return (
    <div className={`flex ${isElder ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] rounded-lg p-4 ${
        isElder ? 'bg-gray-100' : 'bg-blue-500 text-white'
      }`}>
        {message.content}
      </div>
    </div>
  );
}