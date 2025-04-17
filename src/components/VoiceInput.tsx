
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useToast } from "@/components/ui/use-toast";

interface VoiceInputProps {
  onVoiceInput: (text: string) => void;
  placeholder?: string;
}

export function VoiceInput({ onVoiceInput, placeholder = "Click to speak" }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const { startListening, stopListening } = useSpeechRecognition({
    onResult: (text) => {
      onVoiceInput(text);
      setIsListening(false);
    },
    onEnd: () => setIsListening(false),
  });

  const handleToggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      startListening();
      toast({
        title: "Listening...",
        description: placeholder,
      });
    } else {
      setIsListening(false);
      stopListening();
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={`${isListening ? 'bg-red-100 hover:bg-red-200' : ''}`}
      onClick={handleToggleListening}
    >
      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
    </Button>
  );
}
