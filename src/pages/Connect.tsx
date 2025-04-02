
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Search, Filter, MessageCircle, UserPlus, Users } from 'lucide-react';

// Simulated data
const peopleData = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    education: "Stanford University",
    graduationYear: 2019,
    avatar: "/placeholder.svg",
    status: "alumni",
    connections: 145,
    isConnected: false
  },
  {
    id: 2,
    name: "David Chen",
    role: "Product Manager",
    company: "Meta",
    location: "New York, NY",
    education: "Stanford University",
    graduationYear: 2020,
    avatar: "/placeholder.svg",
    status: "alumni",
    connections: 98,
    isConnected: true
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    role: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    education: "Stanford University",
    graduationYear: 2018,
    avatar: "/placeholder.svg",
    status: "alumni",
    connections: 210,
    isConnected: false
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Data Scientist",
    company: "Amazon",
    location: "Seattle, WA",
    education: "Stanford University",
    graduationYear: 2017,
    avatar: "/placeholder.svg",
    status: "alumni",
    connections: 175,
    isConnected: true
  },
  {
    id: 5,
    name: "Alex Kim",
    role: "Computer Science",
    company: null,
    location: "Palo Alto, CA",
    education: "Stanford University",
    graduationYear: 2023,
    avatar: "/placeholder.svg",
    status: "student",
    connections: 42,
    isConnected: false
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Business Administration",
    company: null,
    location: "Stanford, CA",
    education: "Stanford University",
    graduationYear: 2024,
    avatar: "/placeholder.svg",
    status: "student",
    connections: 37,
    isConnected: false
  }
];

const PersonCard = ({ 
  person, 
  onConnect, 
  onMessage 
}: { 
  person: typeof peopleData[0]; 
  onConnect: (personId: number) => void; 
  onMessage: (personId: number) => void;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 neo-blur">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <img 
                src={person.avatar} 
                alt={person.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-xl">{person.name}</CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant={person.status === "alumni" ? "default" : "secondary"}>
                  {person.status === "alumni" ? "Alumni" : "Student"}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {person.status === "alumni" ? "Class of " : "Expected "}{person.graduationYear}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          {person.company ? (
            <p className="text-sm font-medium">{person.role} at {person.company}</p>
          ) : (
            <p className="text-sm font-medium">{person.role} Student</p>
          )}
          <p className="text-sm text-muted-foreground">{person.location}</p>
        </div>
        <div className="flex items-center text-sm">
          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{person.connections} connections</span>
        </div>
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Button 
          onClick={() => onMessage(person.id)} 
          variant="outline" 
          className="flex-1"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Message
        </Button>
        {!person.isConnected ? (
          <Button 
            onClick={() => onConnect(person.id)} 
            className="flex-1"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Connect
          </Button>
        ) : (
          <Button 
            variant="secondary"
            className="flex-1 cursor-default"
            disabled
          >
            <Users className="h-4 w-4 mr-2" />
            Connected
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Connect = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleConnect = (personId: number) => {
    const person = peopleData.find(p => p.id === personId);
    
    if (person) {
      toast({
        title: "Connection Request Sent",
        description: `Your connection request to ${person.name} has been sent.`,
      });
    }
  };
  
  const handleMessage = (personId: number) => {
    const person = peopleData.find(p => p.id === personId);
    
    if (person) {
      toast({
        title: "Message Feature Coming Soon",
        description: `Messaging functionality will be available soon!`,
      });
    }
  };
  
  // Filter people based on search query
  const filteredPeople = peopleData.filter(person => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (person.company && person.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // Separate people into alumni and students
  const alumni = filteredPeople.filter(person => person.status === "alumni");
  const students = filteredPeople.filter(person => person.status === "student");
  
  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Connect</h1>
          <p className="text-muted-foreground">
            Build your network with alumni and students
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name, role, or company..." 
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
      
      <Tabs defaultValue="all" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="alumni">Alumni</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="my-connections">My Connections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {filteredPeople.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPeople.map((person) => (
                <PersonCard 
                  key={person.id} 
                  person={person} 
                  onConnect={handleConnect} 
                  onMessage={handleMessage} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  No people match your search criteria. Try adjusting your search or filters.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="alumni">
          {alumni.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumni.map((person) => (
                <PersonCard 
                  key={person.id} 
                  person={person} 
                  onConnect={handleConnect} 
                  onMessage={handleMessage} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Alumni Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  No alumni match your search criteria. Try adjusting your search or filters.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="students">
          {students.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((person) => (
                <PersonCard 
                  key={person.id} 
                  person={person} 
                  onConnect={handleConnect} 
                  onMessage={handleMessage} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  No students match your search criteria. Try adjusting your search or filters.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="my-connections">
          <Card className="neo-blur">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <Users className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">My Connections</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                This feature will be available soon. You'll be able to see all your connections here.
              </p>
              <Button variant="outline">
                Browse People
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Connect;
