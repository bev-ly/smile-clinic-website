import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  const mapUrl = "https://www.google.com/maps?q=123+Dental+Lane,+Austin,+TX&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=123+Dental+Lane,+Austin,+TX";

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">We're here to help with your dental needs</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 border rounded"
                ></textarea>
                <button className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <a 
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <iframe
                    src={mapUrl}
                    className="w-full h-64 rounded-lg"
                    loading="lazy"
                  ></iframe>
                  <div className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                    <span className="opacity-0 hover:opacity-100 text-white bg-black/50 px-4 py-2 rounded">
                      Open in Google Maps
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-sky-600" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>(512) 555-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-sky-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@brightsmile.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-sky-600" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>123 Dental Lane, Austin, TX</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-sky-600" />
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <p>Monday - Friday: 8AM-6PM</p>
                    <p>Saturday: 9AM-3PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
