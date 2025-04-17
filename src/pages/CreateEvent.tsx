
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VoiceInput } from "@/components/VoiceInput";
import { EventTypeSelector } from "@/components/event-creation/EventTypeSelector";
import { EventDetailsForm } from "@/components/event-creation/EventDetailsForm";
import { ProgressSteps } from "@/components/event-creation/ProgressSteps";

export default function CreateEvent() {
  const [step, setStep] = useState(1);
  const [selectedEventType, setSelectedEventType] = useState("");
  const navigate = useNavigate();
  
  const handleEventTypeSelect = (eventTypeId: string) => {
    setSelectedEventType(eventTypeId);
    setStep(2);
  };
  
  const handleCreateEvent = () => {
    navigate("/dashboard");
  };

  const processVoiceInput = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('wedding')) {
      handleEventTypeSelect('wedding');
    } else if (lowerText.includes('corporate')) {
      handleEventTypeSelect('corporate');
    } else if (lowerText.includes('social')) {
      handleEventTypeSelect('social');
    } else if (lowerText.includes('custom')) {
      handleEventTypeSelect('other');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Event</h1>
              <p className="text-gray-600">Let's start planning your perfect event with voice commands or manual input.</p>
            </div>
            <VoiceInput 
              onVoiceInput={processVoiceInput}
              placeholder="Try saying 'Create a wedding event'"
            />
          </div>
          
          <ProgressSteps currentStep={step} />
          
          {step === 1 && (
            <EventTypeSelector
              selectedType={selectedEventType}
              onTypeSelect={handleEventTypeSelect}
              onVoiceInput={processVoiceInput}
            />
          )}
          
          {step === 2 && (
            <EventDetailsForm
              onBack={() => setStep(1)}
              onSubmit={handleCreateEvent}
              onVoiceInput={processVoiceInput}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
