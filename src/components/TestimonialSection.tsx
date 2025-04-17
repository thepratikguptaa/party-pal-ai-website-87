
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Party Pal's AI made planning my daughter's wedding so much easier. It suggested vendors I wouldn't have found otherwise and kept us on budget!",
      author: "Maria J.",
      title: "Mother of the Bride",
      stars: 5
    },
    {
      quote: "As an event coordinator, I was skeptical about AI planning, but this tool has become indispensable. It's like having a virtual assistant 24/7.",
      author: "Carlos T.",
      title: "Corporate Event Manager",
      stars: 5
    },
    {
      quote: "The timeline features helped keep my entire team on the same page. We delivered our company retreat without a single hiccup.",
      author: "Samantha K.",
      title: "HR Director",
      stars: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Real experiences from event planners and hosts who've used our AI assistant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-party-50 border border-party-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.stars ? 'text-amber-400' : 'text-gray-300'}`} 
                      fill={i < testimonial.stars ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
