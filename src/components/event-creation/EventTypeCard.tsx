
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EventTypeCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export function EventTypeCard({ id, title, icon: Icon, description, isSelected, onClick }: EventTypeCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:border-party-300 hover:shadow-md ${
        isSelected ? "border-party-500 ring-2 ring-party-200" : ""
      }`}
      onClick={() => onClick(id)}
    >
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="bg-party-100 rounded-full p-3 mr-4">
            <Icon className="w-6 h-6 text-party-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
