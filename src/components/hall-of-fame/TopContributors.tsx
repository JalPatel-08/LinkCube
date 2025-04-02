import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Medal, Trophy, Star, Gift } from 'lucide-react';

interface Contributor {
  id: number;
  name: string;
  role: string;
  contributions: string;
  avatar: string;
  badge: string;
  points: number;
}

interface TopContributorsTabProps {
  contributors: Contributor[];
}

export const TopContributorsTab: React.FC<TopContributorsTabProps> = ({ contributors }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          Top Contributors
        </CardTitle>
        <CardDescription>
          Recognizing members with the highest impact on our community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {contributors.map((contributor, index) => (
            <div key={contributor.id} className="flex items-center gap-4">
              <div className="flex-shrink-0 font-bold text-2xl text-muted-foreground w-8 text-center">
                {index + 1}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-lg ${index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-gray-300' : 'bg-amber-700'} text-white`}>
                {contributor.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium truncate">{contributor.name}</h3>
                    <p className="text-sm text-muted-foreground">{contributor.role}</p>
                  </div>
                  <Badge variant="outline" className="ml-2 bg-primary/10">
                    {contributor.points} pts
                  </Badge>
                </div>
                <p className="text-sm mt-1 truncate">{contributor.contributions}</p>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {contributor.badge}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 mt-4">
            <h3 className="font-medium mb-2">Gamification Elements</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="bg-secondary/50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Medal className="h-5 w-5 text-amber-500" />
                </div>
                <p className="text-xs font-medium">Earn Badges</p>
              </div>
              <div className="bg-secondary/50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Trophy className="h-5 w-5 text-amber-500" />
                </div>
                <p className="text-xs font-medium">Climb Leaderboards</p>
              </div>
              <div className="bg-secondary/50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Star className="h-5 w-5 text-amber-500" />
                </div>
                <p className="text-xs font-medium">Complete Missions</p>
              </div>
              <div className="bg-secondary/50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Gift className="h-5 w-5 text-amber-500" />
                </div>
                <p className="text-xs font-medium">Unlock Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 