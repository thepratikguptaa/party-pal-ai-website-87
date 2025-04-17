
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot } from "lucide-react";

export function AIAssistantSection() {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([
    { 
      role: "assistant", 
      content: "Hi! I'm your AI event planning assistant. How can I help you today?" 
    }
  ]);

  // Demo function to simulate AI responses
  const handleSendMessage = () => {
    if (!question.trim()) return;
    
    // Add user message to conversation
    setConversation(prev => [...prev, { role: "user", content: question }]);
    
    // Simulate response based on question keywords
    setTimeout(() => {
      let response = "I'd be happy to help with that! Could you provide more details about your event?";
      
      if (question.toLowerCase().includes("wedding")) {
        response = "Planning a wedding? Great! I suggest starting with setting a date and budget, then selecting a venue. Would you like me to help with any of these steps?";
      } else if (question.toLowerCase().includes("birthday")) {
        response = "Birthday parties are fun to plan! What age group is this for, and do you have a theme in mind?";
      } else if (question.toLowerCase().includes("budget")) {
        response = "Creating a budget is a smart start! Typically, you'll want to allocate 50% to venue and catering, 10% to entertainment, 10% to decorations, and 30% to other expenses. How much are you looking to spend?";
      }
      
      setConversation(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);
    
    setQuestion("");
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-party-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Our AI Event Assistant</h2>
          <p className="text-lg text-gray-600">
            Ask a question about event planning and see how our AI can help you create the perfect event.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex items-center gap-2 bg-party-500 text-white p-4">
            <Bot className="w-5 h-5" />
            <h3 className="font-medium">Event Planning Assistant</h3>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 flex flex-col gap-4">
            {conversation.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === "assistant" 
                    ? "bg-party-100 text-gray-800 self-start rounded-bl-none" 
                    : "bg-gray-100 self-end rounded-br-none"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
          
          <div className="border-t p-4 flex gap-2">
            <Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about venue selection, budget planning, themes..."
              className="min-h-[60px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              className="bg-party-500 hover:bg-party-600 self-end"
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
