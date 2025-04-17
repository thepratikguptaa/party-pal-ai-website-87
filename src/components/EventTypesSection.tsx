
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EventTypesSection() {
  const eventTypes = [
    {
      title: "Weddings",
      description: "Everything you need for your perfect day, from venue selection to honeymoon planning.",
      image: "https://images.unsplash.com/photo-1519741347686-c1e331fcb97e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Corporate Events",
      description: "Conferences, retreats, and team-building events planned with precision and professionalism.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Birthday Parties",
      description: "Create memorable celebrations for all ages with themes, entertainment, and more.",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Social Gatherings",
      description: "From dinner parties to reunions, make your social events special and stress-free.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Events for Every Occasion</h2>
          <p className="text-lg text-gray-600">
            Our AI assistant is specialized in planning a wide variety of events to suit your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventTypes.map((eventType, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={eventType.image} 
                  alt={eventType.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{eventType.title}</h3>
                <p className="text-gray-600 mb-4">{eventType.description}</p>
                <Button variant="link" className="text-party-600 hover:text-party-700 p-0 h-auto gap-2">
                  Start Planning
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
