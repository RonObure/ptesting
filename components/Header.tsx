// src/components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-indigo-600 p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Peersvel
        </Link>
        <div>
          <Link href="/login" className="text-white px-4">
            Login
          </Link>
          <Link href="/dashboard" className="text-white px-4">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
