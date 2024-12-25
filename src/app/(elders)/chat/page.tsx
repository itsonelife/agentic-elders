export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages will go here */}
      </div>
      <div className="border-t p-4">
        {/* Chat input will go here */}
      </div>
    </div>
  );
}