// Define types for clarity
export type TimelineEvent = {
  date: string;
  event: string;
  link: string;
};

export type Theme = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  timeline: TimelineEvent[]; // 👈 now TS knows this exists
};

export type Story = {
  id: string;
  title: string;
  image: string;
  tags: string[];
};

// Dummy stories
export const stories: Story[] = [
  {
    id: "1",
    title: "Nepal Gen Z Protest",
    image: "https://source.unsplash.com/600x400/?protest",
    tags: ["Politics", "Youth"],
  },
  {
    id: "2",
    title: "GST Reform 2.0 Announced",
    image: "https://source.unsplash.com/600x400/?economy",
    tags: ["Economy", "India"],
  },
];

// Dummy themes with timelines
export const themes: Theme[] = [
  {
    id: "1",
    title: "Russia-Ukraine War",
    image: "https://source.unsplash.com/600x400/?war",
    tags: ["Global", "Conflict"],
    timeline: [
      {
        date: "Feb 2022",
        event: "Russia invades Ukraine, sparking global crisis.",
        link: "https://www.bbc.com/news/world-europe-60506682",
      },
      {
        date: "Sep 2022",
        event: "Ukraine retakes Kharkiv region in counteroffensive.",
        link: "https://www.theguardian.com/world/2022/sep/12/ukraine-kharkiv-counteroffensive",
      },
    ],
  },
  {
    id: "2",
    title: "Indian Politics",
    image: "https://source.unsplash.com/600x400/?parliament",
    tags: ["Politics", "India"],
    timeline: [
      {
        date: "2019",
        event: "General elections bring BJP to power again.",
        link: "https://www.bbc.com/news/world-asia-india-48366964",
      },
      {
        date: "2024",
        event: "Major reforms debated in parliament.",
        link: "https://www.livemint.com/politics",
      },
    ],
  },
];
