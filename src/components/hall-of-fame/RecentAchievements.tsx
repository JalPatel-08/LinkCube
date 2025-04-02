import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Gift, Heart, ThumbsUp, Lightbulb, Calendar } from 'lucide-react';

interface Achievement {
  id: number;
  name: string;
  achievement: string;
  date: string;
  icon: React.ComponentType<any>;
}

interface RecentAchievementsTabProps {
  achievements: Achievement[];
}

export const RecentAchievementsTab: React.FC<RecentAchievementsTabProps> = ({ achievements }) => {
  return (
    <>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Recent Notable Achievements
          </CardTitle>
          <CardDescription>
            Celebrating recent contributions to our community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div key={achievement.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{achievement.name}</h3>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                    <p className="text-sm">{achievement.achievement}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-4">
        <CardHeader className="pb-2">
          <CardTitle>Recognition Categories</CardTitle>
          <CardDescription>Ways to get recognized in our community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="font-medium">Mentorship Excellence</h3>
              </div>
              <p className="text-sm text-muted-foreground">Recognized for exceptional guidance and support to students</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Gift className="h-4 w-4 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="font-medium">Philanthropic Impact</h3>
              </div>
              <p className="text-sm text-muted-foreground">Honored for significant donations and financial support</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="font-medium">Innovation & Ideas</h3>
              </div>
              <p className="text-sm text-muted-foreground">Celebrated for creative solutions and innovative thinking</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="font-medium">Event Organization</h3>
              </div>
              <p className="text-sm text-muted-foreground">Recognized for coordinating impactful community events</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}; 