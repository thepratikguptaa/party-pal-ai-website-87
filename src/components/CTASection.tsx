
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-party-600 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Planning Your Next Event?</h2>
          <p className="text-xl text-party-100 mb-8">
            Join thousands of successful event planners who are saving time and reducing stress with our AI assistant.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-party-600 hover:bg-party-100 gap-2 px-6 py-6 text-base">
              Start Planning For Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-party-500 gap-2 px-6 py-6 text-base"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
