
import { Calendar, Banknote, Users, MapPin } from "lucide-react";
import { VoiceInput } from "@/components/VoiceInput";
import { EventTypeCard } from "./EventTypeCard";

export const eventTypes = [
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

interface EventTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (eventTypeId: string) => void;
  onVoiceInput: (text: string) => void;
}

export function EventTypeSelector({ selectedType, onTypeSelect, onVoiceInput }: EventTypeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Select Event Type</h2>
        <p className="text-sm text-gray-500">Or say "Create a [event type] event"</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventTypes.map((eventType) => (
          <EventTypeCard
            key={eventType.id}
            {...eventType}
            isSelected={selectedType === eventType.id}
            onClick={onTypeSelect}
          />
        ))}
      </div>
    </div>
  );
}
