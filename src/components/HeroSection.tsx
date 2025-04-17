
import { Button } from "@/components/ui/button";
import { ArrowRight, PartyPopper, CalendarCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 bg-gradient-to-br from-white via-purple-50 to-party-100">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-party-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-party-600 text-sm font-medium">AI-Powered Event Planning</span>
            <div className="w-2 h-2 bg-party-500 rounded-full mx-2"></div>
            <span className="text-gray-600 text-sm">Beta</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Plan Your Perfect Event <span className="text-party-600">With AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            From weddings to corporate retreats, let our AI assistant handle the details 
            while you focus on making memories.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create-event">
              <Button 
                size="lg" 
                className="bg-party-500 hover:bg-party-600 gap-2 px-6 py-6 text-base"
              >
                Start Planning Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 px-6 py-6 text-base"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: PartyPopper,
              title: "Any Event Type",
              description: "From intimate gatherings to large conferences, our AI can help plan it all."
            },
            {
              icon: CalendarCheck,
              title: "Complete Planning",
              description: "Venues, catering, entertainment, invitations - we've got every detail covered."
            },
            {
              icon: Sparkles,
              title: "AI Recommendations",
              description: "Get personalized suggestions that match your vision, budget, and timeline."
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-party-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-party-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
