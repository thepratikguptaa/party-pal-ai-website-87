
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full py-4 px-6 bg-white/70 backdrop-blur-md fixed top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-party-600">
          <span className="bg-party-500 text-white p-1 rounded-md">Party</span>
          <span>Pal</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-party-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/events" className="text-sm font-medium text-gray-600 hover:text-party-600 transition-colors">
            My Events
          </Link>
          <Link to="/templates" className="text-sm font-medium text-gray-600 hover:text-party-600 transition-colors">
            Templates
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-party-600 transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Log in
          </Button>
          <Link to="/create-event">
            <Button className="bg-party-500 hover:bg-party-600">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
