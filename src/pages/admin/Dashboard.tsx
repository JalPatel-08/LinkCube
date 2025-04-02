import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, DollarSign } from 'lucide-react';
import { AreaChart, BarChart } from '@/components/ui/charts';

const AdminDashboard: React.FC = () => {
  // Sample data for charts
  const chartData = [
    {
      name: 'Jan',
      users: 400,
      events: 240,
      engagement: 67,
    },
    {
      name: 'Feb',
      users: 450,
      events: 320,
      engagement: 75,
    },
    {
      name: 'Mar',
      users: 480,
      events: 280,
      engagement: 72,
    },
    {
      name: 'Apr',
      users: 520,
      events: 305,
      engagement: 70,
    },
    {
      name: 'May',
      users: 560,
      events: 350,
      engagement: 78,
    },
    {
      name: 'Jun',
      users: 590,
      events: 390,
      engagement: 82,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,453</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Pieces</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,324</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Monthly user activity overview</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <AreaChart
              data={chartData}
              index="name"
              categories={['users', 'events']}
              colors={['#2563eb', '#9333ea']}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement</CardTitle>
            <CardDescription>User engagement percentage</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <BarChart
              data={chartData}
              index="name"
              categories={['engagement']}
              colors={['#9333ea']}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard; 