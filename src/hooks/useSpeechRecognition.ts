
interface UseSpeechRecognitionProps {
  onResult: (text: string) => void;
  onEnd?: () => void;
}

export const useSpeechRecognition = ({ onResult, onEnd }: UseSpeechRecognitionProps) => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    onResult(text);
  };

  recognition.onend = () => {
    onEnd?.();
  };

  const startListening = () => {
    try {
      recognition.start();
    } catch (error) {
      console.error('Speech recognition error:', error);
    }
  };

  const stopListening = () => {
    recognition.stop();
  };

  return {
    startListening,
    stopListening,
  };
};
