
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-sky-600">BrightSmile</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'gallery', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-sky-600 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-sky-600 hover:bg-sky-700 text-white"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
