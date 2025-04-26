
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooth, Smile, User, Users } from 'lucide-react';

const services = [
  {
    icon: <Tooth className="w-8 h-8 text-sky-600" />,
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, and preventive care."
  },
  {
    icon: <Smile className="w-8 h-8 text-sky-600" />,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers."
  },
  {
    icon: <User className="w-8 h-8 text-sky-600" />,
    title: "Orthodontics",
    description: "Braces, Invisalign, and retainers."
  },
  {
    icon: <Users className="w-8 h-8 text-sky-600" />,
    title: "Pediatric Dentistry",
    description: "Gentle dental care for kids and teens."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Dental Services</h2>
          <p className="text-gray-600">Top-tier dental care for every smile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-2">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

