
import { useState } from 'react';
import { 
  Award, Briefcase, Calendar, MessageCircle, Users, BookOpen, 
  BrainCircuit, Layers, HandCoins 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  details: string[];
}

const featuresList: Feature[] = [
  {
    id: 'connect',
    title: 'AI-Powered Connections',
    description: 'Connect with alumni and students based on shared interests, skills, and career goals.',
    icon: <Users className="h-10 w-10" />,
    details: [
      'Intelligent matching algorithms connect you with relevant professionals',
      'Filter connections by industry, graduation year, or interests',
      'Build your professional network through personalized recommendations',
      'Stay connected with your alma mater and fellow graduates'
    ]
  },
  {
    id: 'events',
    title: 'Personalized Events',
    description: 'Discover and participate in events tailored to your interests and career stage.',
    icon: <Calendar className="h-10 w-10" />,
    details: [
      'Receive notifications for events relevant to your field',
      'Seamless RSVP process with calendar synchronization',
      'Virtual and in-person networking opportunities',
      'Track participation and stay engaged with your community'
    ]
  },
  {
    id: 'jobs',
    title: 'NLP-Powered Job Matching',
    description: 'Find the perfect career opportunities through our advanced job matching system.',
    icon: <Briefcase className="h-10 w-10" />,
    details: [
      'AI analysis of your skills and experience for precise job matching',
      'Personalized job recommendations based on your career goals',
      'Direct connections with alumni hiring at top companies',
      'Career advancement opportunities specifically for alumni'
    ]
  },
  {
    id: 'mentoring',
    title: 'Mentorship Programs',
    description: 'Give back to your community by mentoring students or find a mentor to guide your career.',
    icon: <Award className="h-10 w-10" />,
    details: [
      'Connect with experienced professionals in your field',
      'Structured mentorship programs with clear objectives',
      'Track your mentorship journey and celebrate milestones',
      'Build meaningful relationships that advance your career'
    ]
  },
  {
    id: 'resources',
    title: 'Exclusive Resources',
    description: 'Access a wealth of resources including workshops, articles, and learning opportunities.',
    icon: <BookOpen className="h-10 w-10" />,
    details: [
      'Curated content specific to your industry and interests',
      'Workshops and webinars led by industry experts',
      'Continuous learning opportunities to advance your skills',
      'Exclusive alumni resources and benefits'
    ]
  },
  {
    id: 'ai',
    title: 'AI Recommendations',
    description: 'Receive personalized recommendations for events, connections, and opportunities.',
    icon: <BrainCircuit className="h-10 w-10" />,
    details: [
      'Smart content curation based on your profile and activity',
      'Discover relevant opportunities you might have missed',
      'Continuously improving recommendations based on your feedback',
      'Stay updated with the most relevant information for your career'
    ]
  },
  {
    id: 'community',
    title: 'Community Engagement',
    description: 'Participate in discussions, forums, and collaborative initiatives with your community.',
    icon: <MessageCircle className="h-10 w-10" />,
    details: [
      'Engage in topic-specific discussion groups',
      'Share insights and experiences with peers',
      'Collaborate on initiatives that benefit your alma mater',
      'Build a supportive community of like-minded professionals'
    ]
  },
  {
    id: 'donations',
    title: 'Transparent Donations',
    description: 'Contribute to your institution with full transparency and track the impact of your donations.',
    icon: <HandCoins className="h-10 w-10" />,
    details: [
      'Blockchain-based donation tracking for complete transparency',
      'Choose specific initiatives and projects to support',
      'See the real-time impact of your contributions',
      'Connect with others who share your philanthropic interests'
    ]
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState('connect');

  return (
    <section className="py-24 bg-cube-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cube-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cube-purple/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-sm mb-4">
            <span className="bg-primary/80 rounded-full w-3 h-3 mr-2"></span>
            <span className="text-foreground/80">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to connect and thrive
          </h2>
          
          <p className="text-muted-foreground text-lg">
            LinkCube provides a comprehensive suite of features designed to foster 
            meaningful connections between alumni and students.
          </p>
        </div>
        
        <Tabs 
          defaultValue="connect" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 bg-background/30 backdrop-blur-sm border border-border/40">
              {featuresList.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary gap-2"
                >
                  <span className="hidden md:inline">{feature.title}</span>
                  <span className="md:hidden">{feature.icon}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {featuresList.map((feature) => (
            <TabsContent 
              key={feature.id} 
              value={feature.id}
              className="animate-fade-in"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{feature.description}</p>
                  
                  <ul className="space-y-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="relative aspect-square md:aspect-video max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cube-purple/20 rounded-2xl blur-xl animate-pulse-slow"></div>
                    <div className="relative h-full glass-card rounded-2xl flex items-center justify-center">
                      <div className="p-6 text-center">
                        <div className="mx-auto bg-gradient-to-br from-primary/30 to-cube-purple/30 p-8 rounded-full mb-4">
                          {feature.icon}
                        </div>
                        <h4 className="text-xl font-medium">{feature.title}</h4>
                        <p className="text-muted-foreground mt-2">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
