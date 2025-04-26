
import { BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <BookOpen className="w-12 h-12 text-sky-600 mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-sky-600 rounded mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Welcome to BrightSmile Dental</h3>
            <p className="text-gray-600 leading-relaxed">
              Since 1990, BrightSmile Dental has been providing exceptional dental care to our community. 
              Our state-of-the-art facility and experienced team are committed to delivering the highest 
              quality dental services in a comfortable and welcoming environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in preventive care and patient education, helping you maintain optimal oral health 
              for years to come. Our team stays up-to-date with the latest dental technologies and 
              techniques to ensure you receive the best possible care.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Our dental team" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
