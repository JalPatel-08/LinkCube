
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Search, Filter, BookOpen, Download, ExternalLink, Clock, Eye, ThumbsUp, BookmarkIcon } from 'lucide-react';

// Simulated resources data
const resourcesData = [
  {
    id: 1,
    title: "Ultimate Resume Guide for New Graduates",
    description: "Learn how to create a standout resume that will get you noticed by recruiters and hiring managers.",
    type: "Guide",
    category: "Career Development",
    author: "Career Services Team",
    publishedDate: "May 15, 2023",
    readTime: "10 min read",
    views: 1245,
    likes: 182,
    image: "/placeholder.svg",
    isBookmarked: false,
    downloadable: true
  },
  {
    id: 2,
    title: "Mastering the Technical Interview",
    description: "Prepare for technical interviews with this comprehensive guide covering common questions and best practices.",
    type: "E-Book",
    category: "Career Development",
    author: "Engineering Alumni Association",
    publishedDate: "June 3, 2023",
    readTime: "25 min read",
    views: 876,
    likes: 134,
    image: "/placeholder.svg",
    isBookmarked: true,
    downloadable: true
  },
  {
    id: 3,
    title: "Networking Strategies for Introverts",
    description: "Effective networking approaches for introverts to build meaningful professional relationships.",
    type: "Article",
    category: "Networking",
    author: "Dr. Sarah Chen",
    publishedDate: "April 22, 2023",
    readTime: "8 min read",
    views: 932,
    likes: 156,
    image: "/placeholder.svg",
    isBookmarked: false,
    downloadable: false
  },
  {
    id: 4,
    title: "Entrepreneurship 101: From Idea to Launch",
    description: "A step-by-step guide to starting your own venture, from ideation to product launch.",
    type: "Course",
    category: "Entrepreneurship",
    author: "Business School",
    publishedDate: "March 10, 2023",
    readTime: "5 hours total",
    views: 543,
    likes: 98,
    image: "/placeholder.svg",
    isBookmarked: false,
    downloadable: false
  },
  {
    id: 5,
    title: "AI and Machine Learning: Career Paths",
    description: "Explore different career paths in the field of artificial intelligence and machine learning.",
    type: "Webinar Recording",
    category: "Tech Careers",
    author: "Dr. James Wilson",
    publishedDate: "May 28, 2023",
    readTime: "45 min watch",
    views: 721,
    likes: 112,
    image: "/placeholder.svg",
    isBookmarked: false,
    downloadable: true
  }
];

const ResourceCard = ({ 
  resource, 
  onBookmark, 
  onDownload, 
  onView 
}: { 
  resource: typeof resourcesData[0]; 
  onBookmark: (resourceId: number, isBookmarked: boolean) => void; 
  onDownload: (resourceId: number) => void; 
  onView: (resourceId: number) => void;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 neo-blur">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <Badge variant="secondary" className="bg-background/60 backdrop-blur-sm">
            {resource.type}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2 bg-card/50">
              {resource.category}
            </Badge>
            <CardTitle className="text-xl line-clamp-1">{resource.title}</CardTitle>
            <CardDescription className="mt-1">
              By {resource.author}
            </CardDescription>
          </div>
          <Button
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 -mt-1"
            onClick={() => onBookmark(resource.id, !resource.isBookmarked)}
          >
            <BookmarkIcon 
              className={`h-5 w-5 ${resource.isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{resource.readTime}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{resource.views}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{resource.likes}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => onView(resource.id)}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View
        </Button>
        {resource.downloadable ? (
          <Button 
            className="flex-1"
            onClick={() => onDownload(resource.id)}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        ) : (
          <Button 
            className="flex-1"
            onClick={() => onView(resource.id)}
          >
            Access Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleBookmark = (resourceId: number, isBookmarked: boolean) => {
    const resource = resourcesData.find(r => r.id === resourceId);
    
    if (resource) {
      toast({
        title: isBookmarked ? "Resource Bookmarked" : "Bookmark Removed",
        description: isBookmarked ? 
          `${resource.title} has been saved to your bookmarks.` : 
          `${resource.title} has been removed from your bookmarks.`,
      });
    }
  };
  
  const handleDownload = (resourceId: number) => {
    const resource = resourcesData.find(r => r.id === resourceId);
    
    if (resource) {
      toast({
        title: "Download Started",
        description: `${resource.title} is being downloaded.`,
      });
    }
  };
  
  const handleView = (resourceId: number) => {
    const resource = resourcesData.find(r => r.id === resourceId);
    
    if (resource) {
      toast({
        title: "Opening Resource",
        description: `Opening ${resource.title}`,
      });
    }
  };
  
  // Filter resources based on search query
  const filteredResources = resourcesData.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get bookmarked resources
  const bookmarkedResources = filteredResources.filter(resource => resource.isBookmarked);
  
  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Resources</h1>
          <p className="text-muted-foreground">
            Access valuable resources to support your career journey
          </p>
        </div>
        <Button 
          className="mt-4 md:mt-0 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Submit Resource
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search resources..." 
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
      
      <Tabs defaultValue="all" className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="career">Career Development</TabsTrigger>
          <TabsTrigger value="tech">Tech Skills</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard 
                  key={resource.id} 
                  resource={resource} 
                  onBookmark={handleBookmark} 
                  onDownload={handleDownload} 
                  onView={handleView}
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Resources Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  No resources match your search criteria. Try adjusting your search or filters.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="career">
          <Card className="neo-blur">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Development</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                This section will showcase resources focused on career development, including resume guidance, interview tips, and professional growth strategies.
              </p>
              <Button variant="outline">
                Explore All Resources
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tech">
          <Card className="neo-blur">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech Skills</h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                This section will provide resources to help you develop technical skills, including programming tutorials, tech trends, and specialized knowledge areas.
              </p>
              <Button variant="outline">
                Explore All Resources
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bookmarked">
          {bookmarkedResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedResources.map((resource) => (
                <ResourceCard 
                  key={resource.id} 
                  resource={resource} 
                  onBookmark={handleBookmark} 
                  onDownload={handleDownload} 
                  onView={handleView}
                />
              ))}
            </div>
          ) : (
            <Card className="neo-blur">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <BookmarkIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Bookmarked Resources</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  You haven't bookmarked any resources yet. Browse resources and bookmark the ones you find useful.
                </p>
                <Button variant="outline">
                  Explore Resources
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
