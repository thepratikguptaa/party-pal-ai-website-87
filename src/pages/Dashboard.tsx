
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  Clock, 
  DollarSign, 
  PlusCircle, 
  ChevronRight, 
  MessageSquare 
} from "lucide-react";

export default function Dashboard() {
  // Demo data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Company Holiday Party",
      date: "December 15, 2023",
      location: "Grand Ballroom",
      progress: 65
    },
    {
      id: 2,
      title: "Product Launch",
      date: "January 20, 2024",
      location: "Tech Conference Center",
      progress: 30
    }
  ];

  // Demo data for tasks
  const upcomingTasks = [
    { id: 1, title: "Confirm catering order", dueDate: "Nov 25", eventId: 1 },
    { id: 2, title: "Send invitations", dueDate: "Nov 30", eventId: 1 },
    { id: 3, title: "Finalize presentation slides", dueDate: "Dec 5", eventId: 2 },
    { id: 4, title: "Book photographer", dueDate: "Dec 10", eventId: 1 }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your events.</p>
            </div>
            <Link to="/create-event">
              <Button className="mt-4 md:mt-0 bg-party-500 hover:bg-party-600 gap-2">
                <PlusCircle className="w-4 h-4" />
                Create New Event
              </Button>
            </Link>
          </div>
          
          {/* Stats overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Active Events", value: "2", icon: Calendar, color: "bg-blue-500" },
              { title: "Total Guests", value: "156", icon: Users, color: "bg-green-500" },
              { title: "Upcoming Deadlines", value: "8", icon: Clock, color: "bg-amber-500" },
              { title: "Budget Tracked", value: "$12,500", icon: DollarSign, color: "bg-purple-500" }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center">
                  <div className={`${stat.color} rounded-full p-3 mr-4 text-white`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming events */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center">
                    <span>Upcoming Events</span>
                    <Button variant="link" className="text-party-600 gap-1">
                      View all <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingEvents.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div 
                          key={event.id} 
                          className="flex flex-col p-4 border rounded-lg hover:border-party-300 hover:shadow-sm transition-all cursor-pointer"
                        >
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">{event.title}</h3>
                            <span className="text-sm text-gray-500">{event.date}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-3">
                            <span>{event.location}</span>
                          </div>
                          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-party-500 h-full rounded-full" 
                              style={{ width: `${event.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between mt-2 text-xs">
                            <span>Planning progress</span>
                            <span className="font-medium">{event.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">No upcoming events yet</p>
                      <Button className="bg-party-500 hover:bg-party-600">
                        Create Your First Event
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Right column */}
            <div className="space-y-8">
              {/* AI Assistant quick access */}
              <Card className="bg-gradient-to-br from-party-600 to-party-800 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">AI Assistant</h3>
                      <p className="text-party-100 text-sm">Get instant help with your planning</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <Button className="w-full bg-white/10 hover:bg-white/20 justify-start text-left text-sm h-auto py-2">
                      Find venue recommendations
                    </Button>
                    <Button className="w-full bg-white/10 hover:bg-white/20 justify-start text-left text-sm h-auto py-2">
                      Generate a catering menu
                    </Button>
                    <Button className="w-full bg-white/10 hover:bg-white/20 justify-start text-left text-sm h-auto py-2">
                      Help with budget planning
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white/10">
                    Open AI Chat
                  </Button>
                </CardContent>
              </Card>
              
              {/* Upcoming tasks */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Upcoming Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingTasks.length > 0 ? (
                    <div className="space-y-2">
                      {upcomingTasks.map((task) => (
                        <div 
                          key={task.id} 
                          className="flex items-center justify-between p-3 border rounded-lg hover:border-party-300 hover:bg-gray-50 transition-all"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0" />
                            <span>{task.title}</span>
                          </div>
                          <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-4 text-gray-500">No upcoming tasks</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
