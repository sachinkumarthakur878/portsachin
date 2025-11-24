import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="container-custom section-padding py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Sachin Kumar Thakur</p>
            <p className="text-sm text-gray-300">BCA Student & Passionate Developer</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>© {currentYear} Built with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>by Sachin Kumar Thakur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;