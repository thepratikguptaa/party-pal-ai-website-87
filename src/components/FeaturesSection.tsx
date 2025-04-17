
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, CreditCard, Users, MessageSquare, CheckCircle } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Event Assistant",
      description: "Chat with our intelligent assistant to brainstorm ideas, solve planning challenges, and get recommendations."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically organize your timeline and receive reminders for important planning milestones."
    },
    {
      icon: Users,
      title: "Guest Management",
      description: "Easily manage invitations, RSVPs, and special accommodations for your guests."
    },
    {
      icon: CreditCard,
      title: "Budget Tracking",
      description: "Keep tabs on expenses and receive suggestions to optimize your spending."
    },
    {
      icon: CheckCircle,
      title: "Vendor Coordination",
      description: "Find and communicate with venues, caterers, and other service providers all in one place."
    },
    {
      icon: Clock,
      title: "Day-of Timeline",
      description: "Create a detailed schedule for your event day to ensure everything runs smoothly."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need For Successful Events</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform provides all the tools you need to plan, organize, and execute flawless events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-party-300 hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-party-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-party-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
