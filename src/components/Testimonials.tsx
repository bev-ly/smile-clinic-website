
import { MessageSquare, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The team at BrightSmile is amazing! They made my dental visit comfortable and stress-free.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Professional, friendly, and thorough. Best dental experience I've ever had.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "State-of-the-art facility with a caring staff. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <MessageSquare className="w-12 h-12 text-sky-600 mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-sky-600 rounded mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
