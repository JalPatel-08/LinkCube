import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TopContributorsTab } from '@/components/hall-of-fame/TopContributors';
import { RecentAchievementsTab } from '@/components/hall-of-fame/RecentAchievements';
import { TopInnovatorsTab } from '@/components/hall-of-fame/TopInnovators';
import { topContributors, createRecentAchievements, topInnovators } from '@/data/hall-of-fame-data';

const HallOfFame = () => {
  // Use data from our data provider
  const recentAchievements = createRecentAchievements();
  
  return (
    <div className="space-y-6 pb-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Hall of Fame</h1>
          <p className="text-muted-foreground">Celebrating our outstanding community members</p>
        </div>
      </div>

      <Tabs defaultValue="leaderboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="achievements">Recent Achievements</TabsTrigger>
          <TabsTrigger value="innovators">Top Innovators</TabsTrigger>
        </TabsList>
        
        <TabsContent value="leaderboard" className="space-y-4 mt-4">
          <TopContributorsTab contributors={topContributors} />
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-4 mt-4">
          <RecentAchievementsTab achievements={recentAchievements} />
        </TabsContent>
        
        <TabsContent value="innovators" className="space-y-4 mt-4">
          <TopInnovatorsTab innovators={topInnovators} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HallOfFame; 