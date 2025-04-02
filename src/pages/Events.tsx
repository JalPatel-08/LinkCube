
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, MapPin, Clock, Users, Plus, Search, Filter } from 'lucide-react';
import { format } from 'date-fns';

// Simulated events data
const eventsData = [
  {
    id: 1,
    title: "Annual Alumni Gala",
    description: "Join us for an evening of networking, dinner, and inspiring talks from distinguished alumni.",
    date: new Date(2023, 5, 20),
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom, University Center",
    type: "in-person",
    category: "networking",
    attendees: 155,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Career Development Workshop",
    description: "Learn how to build an effective resume and prepare for job interviews from industry experts.",
    date: new Date(2023, 5, 25),
    time: "2:00 PM - 4:00 PM",
    location: "Virtual - Zoom",
    type: "virtual",
    category: "workshop",
    attendees: 87,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Tech Networking Meetup",
    description: "Network with alumni and students in tech fields and discover new career opportunities.",
    date: new Date(2023, 6, 5),
    time: "5:30 PM - 7:30 PM",
    location: "Innovation Hub, Engineering Building",
    type: "in-person",
    category: "networking",
    attendees: 62,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Entrepreneurship Seminar",
    description: "Hear from successful alumni entrepreneurs about their journey from classroom to startup success.",
    date: new Date(2023, 6, 12),
    time: "3:00 PM - 5:00 PM",
    location: "Business School Auditorium",
    type: "in-person",
    category: "seminar",
    attendees: 94,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Industry Panel: Future of AI",
    description: "Join a panel discussion with industry leaders discussing the future of AI and its impact on various fields.",
    date: new Date(2023, 6, 18),
    time: "1:00 PM - 3:00 PM",
    location: "Virtual - Zoom",
    type: "virtual",
    category: "panel",
    attendees: 118,
    image: "/placeholder.svg"
  }
];

const EventCard = ({ 
  event, 
  onRSVP 
}: { 
  event: typeof eventsData[0]; 
  onRSVP: (eventId: number) => void;
}) => {
  const isPast = event.date < new Date();
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 neo-blur">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img 
          src={event.image} 
          alt={event.title} 
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
        <Badge 
          className="absolute top-3 right-3" 
          variant={event.type === "virtual" ? "outline" : "default"}
        >
          {event.type === "virtual" ? "Virtual" : "In-Person"}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="secondary" className="mb-2">{event.category}</Badge>
            <CardTitle className="text-xl">{event.title}</CardTitle>
          </div>
          <div className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
            {format(event.date, 'MMM d')}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
        <div className="space-y-1.5">
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onRSVP(event.id)} 
          disabled={isPast} 
          className="w-full"
          variant={isPast ? "outline" : "default"}
        >
          {isPast ? "Event Ended" : "RSVP Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Events = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleRSVP = (eventId: number) => {
    // Find the event
    const event = eventsData.find(e => e.id === eventId);
    
    if (event) {
      toast({
        title: "RSVP Confirmed!",
        description: `You've successfully RSVP'd to ${event.title}`,
      });
    }
  };
  
  const handleCreateEvent = () => {
    toast({
      title: "Coming Soon",
      description: "Event creation functionality will be available soon!",
    });
  };
  
  // Filter events based on search query
  const filteredEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Separate events into upcoming and past
  const now = new Date();
  const upcomingEvents = filteredEvents.filter(event => event.date >= now);
  const pastEvents = filteredEvents.filter(event => event.date < now);
  
  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Events</h1>
          <p className="text-muted-foreground">
            Discover and join events to connect with alumni and students
          </p>
        </div>
        <Button 
          onClick={handleCreateEvent} 
          className="mt-4 md:mt-0 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search events..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="sm:w-auto w-full">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
      
      <Tabs defaultValue="upcoming" className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
          <TabsTrigger value="my-events">My Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onRSVP={handleRSVP} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  There are no upcoming events matching your search criteria. Try adjusting your search or create a new event.
                </p>
                <Button onClick={handleCreateEvent}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="past">
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onRSVP={handleRSVP} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Past Events</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  There are no past events matching your search criteria.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="my-events">
          <Card className="neo-blur">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Events Yet</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                You haven't RSVP'd to any events yet. Browse upcoming events and join the ones you're interested in.
              </p>
              <Button variant="outline">
                Browse Events
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;
