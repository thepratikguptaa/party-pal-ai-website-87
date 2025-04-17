
import { VoiceInput } from "@/components/VoiceInput";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventDetailsFormProps {
  onBack: () => void;
  onSubmit: () => void;
  onVoiceInput: (text: string) => void;
}

export function EventDetailsForm({ onBack, onSubmit, onVoiceInput }: EventDetailsFormProps) {
  const handleVoiceInput = (text: string) => {
    const input = document.activeElement as HTMLInputElement;
    if (input?.tagName === 'INPUT' || input?.tagName === 'TEXTAREA') {
      input.value = text;
      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
    onVoiceInput(text);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Enter Basic Details</h2>
        <VoiceInput 
          onVoiceInput={handleVoiceInput}
          placeholder="Speak to fill the current field"
        />
      </div>
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
            onClick={onBack}
          >
            Back
          </Button>
          <Button 
            className="bg-party-500 hover:bg-party-600"
            onClick={onSubmit}
          >
            Create Event
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
