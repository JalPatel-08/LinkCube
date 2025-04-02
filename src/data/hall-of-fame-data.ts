import { Heart, ThumbsUp, Users, Gift } from 'lucide-react';
import React from 'react';

// Define types for our data
export interface Contributor {
  id: number;
  name: string;
  role: string;
  contributions: string;
  avatar: string;
  badge: string;
  points: number;
}

export interface Achievement {
  id: number;
  name: string;
  achievement: string;
  date: string;
  icon: React.ComponentType<any>;
}

export interface Innovator {
  id: number;
  name: string;
  innovation: string;
  impact: string;
  badge: string;
  avatar: string;
  points: number;
}

// Mock data for top contributors
export const topContributors: Contributor[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Class of 2018",
    contributions: "Donated $50,000 to Scholarship Fund",
    avatar: "SJ",
    badge: "Platinum Donor",
    points: 5280,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Class of 2010",
    contributions: "Mentored 32 students, Organized 8 events",
    avatar: "MC",
    badge: "Master Mentor",
    points: 4875,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Class of 2015",
    contributions: "Created the Alumni Tech Workshop Series",
    avatar: "PP",
    badge: "Innovation Champion",
    points: 4690,
  },
];

// Mock data for recent achievements
export const createRecentAchievements = (): Achievement[] => [
  {
    id: 1,
    name: "David Lee",
    achievement: "Launched career mentorship platform",
    date: "Last week",
    icon: Users,
  },
  {
    id: 2,
    name: "Emma Wilson",
    achievement: "Funded 5 student scholarships",
    date: "2 weeks ago",
    icon: Gift,
  },
  {
    id: 3,
    name: "James Garcia",
    achievement: "Organized virtual alumni reunion",
    date: "Last month",
    icon: Heart,
  },
  {
    id: 4,
    name: "Olivia Taylor",
    achievement: "Created student internship program",
    date: "Last month",
    icon: ThumbsUp,
  },
];

// Mock data for top innovators
export const topInnovators: Innovator[] = [
  {
    id: 1,
    name: "Robert Zhang",
    innovation: "AI Mentorship Matching Algorithm",
    impact: "Increased successful mentorships by 65%",
    badge: "Tech Innovator",
    avatar: "RZ",
    points: 4320,
  },
  {
    id: 2,
    name: "Aisha Karim",
    innovation: "Alumni Networking Mobile App",
    impact: "Connected over 5,000 alumni and students",
    badge: "Digital Pioneer",
    avatar: "AK",
    points: 3950,
  },
  {
    id: 3,
    name: "Carlos Mendez",
    innovation: "Virtual Career Fair Platform",
    impact: "Facilitated 1,200+ job placements",
    badge: "Career Catalyst",
    avatar: "CM",
    points: 3780,
  },
]; 