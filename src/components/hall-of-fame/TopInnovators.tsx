import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb } from 'lucide-react';

interface Innovator {
  id: number;
  name: string;
  innovation: string;
  impact: string;
  badge: string;
  avatar: string;
  points: number;
}

interface TopInnovatorsTabProps {
  innovators: Innovator[];
}

export const TopInnovatorsTab: React.FC<TopInnovatorsTabProps> = ({ innovators }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Innovation Leaders
        </CardTitle>
        <CardDescription>
          Members who have transformed our community with their ideas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {innovators.map((innovator, index) => (
            <div key={innovator.id} className="flex items-center gap-4">
              <div className="flex-shrink-0 font-bold text-2xl text-muted-foreground w-8 text-center">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-medium text-lg text-white">
                {innovator.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium truncate">{innovator.name}</h3>
                  <Badge variant="outline" className="ml-2 bg-primary/10">
                    {innovator.points} pts
                  </Badge>
                </div>
                <p className="text-sm font-medium mt-1">{innovator.innovation}</p>
                <p className="text-xs text-muted-foreground mt-1">{innovator.impact}</p>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {innovator.badge}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <h3 className="font-medium mb-2">Submit Your Innovation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Have a groundbreaking idea? Share it with our community and you could be featured here!
            </p>
            <a href="/ideas-donations" className="text-sm text-primary hover:underline">
              Submit your idea on our Innovation Platform →
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 