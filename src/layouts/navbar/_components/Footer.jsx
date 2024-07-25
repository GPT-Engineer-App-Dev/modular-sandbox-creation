import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gray-100 py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);