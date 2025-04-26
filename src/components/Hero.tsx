
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Smile Brighter with Expert Care
            </h1>
            <p className="text-xl text-gray-600">
              Modern dental solutions tailored for your healthiest, happiest smile.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sky-600 hover:bg-sky-700"
              >
                View Services
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-50"
              >
                Book Appointment
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" 
              alt="Dental Care"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

