
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Calendar, Banknote, Users, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const eventTypes = [
  {
    id: "wedding",
    title: "Wedding",
    icon: Calendar,
    description: "Plan your perfect wedding day with our AI assistant."
  },
  {
    id: "corporate",
    title: "Corporate Event",
    icon: Banknote,
    description: "Organize conferences, team-building events, and more."
  },
  {
    id: "social",
    title: "Social Gathering",
    icon: Users,
    description: "From birthdays to reunions, make your social events special."
  },
  {
    id: "other",
    title: "Custom Event",
    icon: MapPin,
    description: "Create a custom event tailored to your specific needs."
  }
];

export default function CreateEvent() {
  const [step, setStep] = useState(1);
  const [selectedEventType, setSelectedEventType] = useState("");
  const navigate = useNavigate();
  
  const handleEventTypeSelect = (eventTypeId: string) => {
    setSelectedEventType(eventTypeId);
    setStep(2);
  };
  
  const handleCreateEvent = () => {
    // In a real app, you would save the event details to a database
    // For now, we'll just redirect to the dashboard
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Event</h1>
            <p className="text-gray-600">Let's start planning your perfect event with the help of our AI assistant.</p>
          </div>
          
          {/* Step indicator */}
          <div className="flex items-center mb-10">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-party-500 text-white" : "bg-gray-200 text-gray-600"
              }`}>
                1
              </div>
              <span className="ml-2 font-medium">Event Type</span>
            </div>
            <div className={`h-px w-16 mx-4 ${step >= 2 ? "bg-party-500" : "bg-gray-200"}`} />
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-party-500 text-white" : "bg-gray-200 text-gray-600"
              }`}>
                2
              </div>
              <span className="ml-2 font-medium">Basic Details</span>
            </div>
            <div className="h-px w-16 mx-4 bg-gray-200" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                3
              </div>
              <span className="ml-2 font-medium">AI Setup</span>
            </div>
          </div>
          
          {/* Step 1: Event Type Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Select Event Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventTypes.map((eventType) => (
                  <Card 
                    key={eventType.id} 
                    className={`cursor-pointer transition-all hover:border-party-300 hover:shadow-md ${
                      selectedEventType === eventType.id ? "border-party-500 ring-2 ring-party-200" : ""
                    }`}
                    onClick={() => handleEventTypeSelect(eventType.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-party-100 rounded-full p-3 mr-4">
                          <eventType.icon className="w-6 h-6 text-party-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{eventType.title}</h3>
                          <p className="text-gray-600 text-sm">{eventType.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Step 2: Basic Details */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Enter Basic Details</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-party-500 focus:border-transparent"
                        placeholder="Enter a name for your event"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Event Date
                        </label>
                        <div className="relative">
                          <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-party-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Guests
                        </label>
                        <input 
                          type="number" 
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-party-500 focus:border-transparent"
                          placeholder="Estimated number of guests"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-party-500 focus:border-transparent"
                        placeholder="Enter event location"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Description
                      </label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-party-500 focus:border-transparent h-24 resize-none"
                        placeholder="Describe your event and any special requirements"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button 
                    className="bg-party-500 hover:bg-party-600"
                    onClick={handleCreateEvent}
                  >
                    Create Event
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
