import { useState } from "react";
import { Link } from "react-router-dom";
import { Wallet,Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary-600 text-white shadow-lg border-b border-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary-600 p-2 rounded-lg">
                <Wallet className="h-8 w-8 text-white" />
            </div>
            <span className="text-accent-500 text-2xl font-bold">Ledgerly</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-accent-500 transition">Home</Link>
            <Link to="/dashboard" className="hover:text-accent-500 transition">Dashboard</Link>
            <Link to="/spending" className="hover:text-accent-500 transition">Spending</Link>
            <Link to="/budget" className="hover:text-accent-500 transition">Budget</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-600 px-4 pb-4 space-y-2">
          <Link to="/" className="hover:text-accent-500 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-accent-500 transition">Dashboard</Link>
          <Link to="/spending" className="hover:text-accent-500 transition">Spending</Link>
          <Link to="/budget" className="hover:text-accent-500 transition">Budget</Link>
        </div>
      )}
    </nav>
  );
}