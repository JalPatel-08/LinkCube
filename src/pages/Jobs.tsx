
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Search, Filter, Briefcase, Building, MapPin, Calendar, ExternalLink, BookmarkIcon } from 'lucide-react';

// Simulated jobs data
const jobsData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    category: "Engineering",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    description: "Google is looking for Software Engineers to build the next generation of web applications. You'll work on challenging projects and collaborate with talented engineers.",
    requirements: [
      "BS in Computer Science or related field",
      "3+ years of experience in web development",
      "Strong JavaScript and React skills",
      "Experience with backend technologies"
    ],
    logo: "/placeholder.svg",
    isBookmarked: false
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Meta",
    location: "New York, NY",
    type: "Full-time",
    category: "Product",
    salary: "$130,000 - $160,000",
    posted: "1 week ago",
    description: "Join Meta as a Product Manager to drive the development of innovative features. You'll work with cross-functional teams to deliver exceptional user experiences.",
    requirements: [
      "BS/MS in Computer Science, Business, or related field",
      "3+ years of product management experience",
      "Strong analytical and communication skills",
      "Experience with agile methodologies"
    ],
    logo: "/placeholder.svg",
    isBookmarked: true
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Full-time",
    category: "Data Science",
    salary: "$125,000 - $155,000",
    posted: "3 days ago",
    description: "Netflix is seeking a Data Scientist to help optimize our recommendation systems. You'll analyze large datasets and develop models to enhance user experience.",
    requirements: [
      "MS/PhD in Computer Science, Statistics, or related field",
      "2+ years of experience in data science",
      "Strong programming skills in Python, R, or similar",
      "Experience with machine learning algorithms"
    ],
    logo: "/placeholder.svg",
    isBookmarked: false
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Full-time",
    category: "Design",
    salary: "$110,000 - $140,000",
    posted: "5 days ago",
    description: "Apple is looking for a UX Designer to create intuitive and elegant user experiences. You'll work on products used by millions of people worldwide.",
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "3+ years of UX design experience",
      "Strong portfolio showcasing user-centered design",
      "Experience with design tools like Figma and Sketch"
    ],
    logo: "/placeholder.svg",
    isBookmarked: false
  },
  {
    id: 5,
    title: "Marketing Intern",
    company: "Spotify",
    location: "Remote",
    type: "Internship",
    category: "Marketing",
    salary: "$25 - $30 per hour",
    posted: "1 day ago",
    description: "Spotify is seeking a Marketing Intern to support our campaigns. You'll gain hands-on experience in digital marketing and work with a dynamic team.",
    requirements: [
      "Currently pursuing a degree in Marketing or related field",
      "Strong communication and organizational skills",
      "Familiarity with social media platforms",
      "Interest in music and entertainment industry"
    ],
    logo: "/placeholder.svg",
    isBookmarked: false
  }
];

const JobCard = ({ 
  job, 
  onApply, 
  onBookmark 
}: { 
  job: typeof jobsData[0]; 
  onApply: (jobId: number) => void; 
  onBookmark: (jobId: number, isBookmarked: boolean) => void;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 neo-blur">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-background border flex items-center justify-center overflow-hidden">
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-xl">{job.title}</CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-muted-foreground">{job.company}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{job.posted}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => onBookmark(job.id, !job.isBookmarked)}
          >
            <BookmarkIcon 
              className={`h-5 w-5 ${job.isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-card/50">
            {job.type}
          </Badge>
          <Badge variant="outline" className="bg-card/50">
            {job.category}
          </Badge>
          {job.salary && (
            <Badge variant="outline" className="bg-card/50">
              {job.salary}
            </Badge>
          )}
        </div>
        
        <div className="space-y-1.5">
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Building className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{job.company}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Button 
          variant="outline" 
          className="flex-1"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Details
        </Button>
        <Button 
          onClick={() => onApply(job.id)} 
          className="flex-1"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const Jobs = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleApply = (jobId: number) => {
    const job = jobsData.find(j => j.id === jobId);
    
    if (job) {
      toast({
        title: "Application Started",
        description: `You're applying for ${job.title} at ${job.company}`,
      });
    }
  };
  
  const handleBookmark = (jobId: number, isBookmarked: boolean) => {
    const job = jobsData.find(j => j.id === jobId);
    
    if (job) {
      toast({
        title: isBookmarked ? "Job Bookmarked" : "Bookmark Removed",
        description: isBookmarked ? 
          `${job.title} at ${job.company} has been saved to your bookmarks.` : 
          `${job.title} has been removed from your bookmarks.`,
      });
    }
  };
  
  // Filter jobs based on search query
  const filteredJobs = jobsData.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get bookmarked jobs
  const bookmarkedJobs = filteredJobs.filter(job => job.isBookmarked);
  
  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Job Board</h1>
          <p className="text-muted-foreground">
            Discover career opportunities posted by alumni and companies
          </p>
        </div>
        <Button 
          className="mt-4 md:mt-0 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <Briefcase className="h-4 w-4 mr-2" />
          Post a Job
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search jobs, companies, or locations..." 
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
      
      <Tabs defaultValue="all-jobs" className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <TabsList className="mb-6">
          <TabsTrigger value="all-jobs">All Jobs</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all-jobs">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onApply={handleApply} 
                  onBookmark={handleBookmark} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Jobs Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  No jobs match your search criteria. Try adjusting your search or filters.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="bookmarked">
          {bookmarkedJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onApply={handleApply} 
                  onBookmark={handleBookmark} 
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <BookmarkIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Bookmarked Jobs</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  You haven't bookmarked any jobs yet. Browse jobs and bookmark the ones you're interested in.
                </p>
                <Button variant="outline">
                  Browse Jobs
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="applied">
          <Card className="neo-blur">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Applied Jobs</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                This feature will be available soon. You'll be able to track all your job applications here.
              </p>
              <Button variant="outline">
                Browse Jobs
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Jobs;
