
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Bell, Calendar, MessageCircle, Users, Star, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Simulated data
const notifications = [
  { id: 1, type: 'connection', message: 'John Doe accepted your connection request', time: '2 hours ago' },
  { id: 2, type: 'event', message: 'New event: Tech Talk on AI and Ethics', time: '1 day ago' },
  { id: 3, type: 'message', message: 'You have a new message from Sarah Johnson', time: '2 days ago' }
];

const upcomingEvents = [
  { 
    id: 1, 
    title: 'Alumni Networking Mixer', 
    date: '2023-06-15', 
    time: '6:00 PM - 8:00 PM', 
    location: 'Student Union Building',
    attendees: 56
  },
  { 
    id: 2, 
    title: 'Career Workshop: Resume Building', 
    date: '2023-06-20', 
    time: '3:00 PM - 5:00 PM', 
    location: 'Virtual - Zoom',
    attendees: 112
  }
];

const recentConnections = [
  { id: 1, name: 'Alex Chen', role: 'Software Engineer at Google', avatar: '/placeholder.svg' },
  { id: 2, name: 'Maria Rodriguez', role: 'Product Manager at Meta', avatar: '/placeholder.svg' },
  { id: 3, name: 'David Kim', role: 'Data Scientist at Amazon', avatar: '/placeholder.svg' }
];

interface NotificationItemProps {
  message: string;
  time: string;
  type: string;
  delay?: number;
}

const NotificationItem = ({ message, time, type, delay = 0 }: NotificationItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={cn(
        "flex items-start p-4 border-b last:border-0 transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="flex-shrink-0 mr-3">
        {type === 'connection' && (
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
        )}
        {type === 'event' && (
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-amber-500" />
          </div>
        )}
        {type === 'message' && (
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  
  const handleRSVP = (eventId: number, eventTitle: string) => {
    toast({
      title: "RSVP Confirmed",
      description: `You've successfully RSVP'd to ${eventTitle}`,
    });
  };
  
  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 animate-fade-in">Dashboard</h1>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Welcome back! Here's what's happening in your network.
          </p>
        </div>
        <Button className="mt-4 md:mt-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Bell className="h-4 w-4 mr-2" />
          Manage Notifications
        </Button>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Notifications Card */}
            <Card className="md:col-span-2 neo-blur">
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>Stay updated with the latest activities</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0 divide-y">
                  {notifications.map((notification, index) => (
                    <NotificationItem 
                      key={notification.id} 
                      message={notification.message} 
                      time={notification.time} 
                      type={notification.type}
                      delay={index * 150}
                    />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/notifications">View all notifications</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Quick Stats Card */}
            <Card className="neo-blur">
              <CardHeader>
                <CardTitle>Your Network</CardTitle>
                <CardDescription>Network statistics and growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Connections</p>
                    <p className="text-2xl font-bold">145</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Events Attended</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Profile Views</p>
                    <p className="text-2xl font-bold">78</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/connect">Grow Your Network</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Upcoming Events */}
          <Card className="neo-blur">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events you might be interested in</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/events">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold truncate">{event.title}</h3>
                      <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        {event.attendees} attending
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => handleRSVP(event.id, event.title)}
                      >
                        RSVP
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Connections */}
          <Card className="neo-blur">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Connections</CardTitle>
                  <CardDescription>People who recently joined your network</CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/connect">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recentConnections.map((connection) => (
                  <div 
                    key={connection.id} 
                    className="p-4 rounded-lg border bg-card/50 hover:bg-card/80 hover-scale"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                        <img 
                          src={connection.avatar} 
                          alt={connection.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{connection.name}</h4>
                        <p className="text-xs text-muted-foreground">{connection.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="events">
          <Card className="neo-blur">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events you might be interested in</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-6">Events content coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="connections">
          <Card className="neo-blur">
            <CardHeader>
              <CardTitle>Your Connections</CardTitle>
              <CardDescription>People in your professional network</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-6">Connections content coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages">
          <Card className="neo-blur">
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Your conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-6">Messages content coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
