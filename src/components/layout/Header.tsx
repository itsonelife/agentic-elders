import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Agentic Elders</span>
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="/chat" className="flex items-center">
              Chat
            </Link>
            <Link href="/profile" className="flex items-center">
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}