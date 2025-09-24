// -----------------------------
// Types
// -----------------------------

export type Event = {
  date: string;
  event: string;
  link: string;
};

export type Analysis = {
  stakeholders: string[];
  faqs: string[];
  future: string[];
};

export type Story = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  overview: string;
  chronology: Event[];
  analysis: Analysis;
};

export type Theme = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  overview: string;
  chronology: Event[];
  analysis: Analysis;
};

// -----------------------------
// Dummy Stories
// -----------------------------

export const stories: Story[] = [
  {
    id: "1",
    title: "Nepal Gen Z Protest",
    image: "https://source.unsplash.com/600x400/?protest",
    tags: ["Politics", "Youth"],
    overview:
      "In 2025, Nepal witnessed a wave of youth-led protests fueled by frustration over unemployment, corruption, and political stagnation. Sparked by viral social media campaigns, the demonstrations quickly spread across major cities. Students and young professionals demanded reforms, transparency, and more inclusive governance. The movement has drawn global attention and prompted heated debates in parliament. Critics warn of instability, while supporters believe this could mark a new chapter in Nepalese politics.",
    chronology: [
      {
        date: "Jan 2025",
        event: "First demonstrations break out in Kathmandu.",
        link: "https://www.bbc.com/news/world-asia-12345",
      },
      {
        date: "Feb 2025",
        event: "Protests intensify with students staging sit-ins.",
        link: "https://www.reuters.com/news/article-12345",
      },
      {
        date: "Mar 2025",
        event: "Government promises reforms, protesters call them inadequate.",
        link: "https://www.aljazeera.com/news/2025/3/10/nepal-protest",
      },
    ],
    analysis: {
      stakeholders: [
        "Nepali student unions",
        "Government of Nepal",
        "Opposition parties",
      ],
      faqs: [
        "What triggered the protests?",
        "How are political leaders responding?",
        "What role does social media play in mobilization?",
      ],
      future: [
        "Will the government introduce genuine reforms?",
        "Could this evolve into a broader political movement?",
      ],
    },
  },
  {
    id: "2",
    title: "GST Reform 2.0 Announced",
    image: "https://source.unsplash.com/600x400/?economy",
    tags: ["Economy", "India"],
    overview:
      "India unveiled its second wave of GST reforms aimed at simplifying compliance and reducing disputes. The reform package introduces a more streamlined filing process, reduces the number of tax slabs, and introduces real-time reconciliation. Businesses have cautiously welcomed the move, though small traders continue to express concerns over compliance burdens. Analysts see this as a step toward stabilizing India’s indirect tax regime, with potential long-term growth benefits.",
    chronology: [
      {
        date: "Feb 2025",
        event: "Finance Minister announces GST Reform 2.0.",
        link: "https://www.livemint.com/economy/gst-reform-2025",
      },
      {
        date: "Mar 2025",
        event: "Industry leaders welcome simplification but raise compliance concerns.",
        link: "https://www.thehindu.com/business/economy",
      },
    ],
    analysis: {
      stakeholders: ["Finance Ministry", "Industry associations", "Small traders"],
      faqs: [
        "How is GST 2.0 different from the first version?",
        "Which sectors will benefit most?",
      ],
      future: [
        "Will compliance actually get easier for SMEs?",
        "Could GST 2.0 improve tax collection efficiency?",
      ],
    },
  },
];

// -----------------------------
// Dummy Themes
// -----------------------------

export const themes: Theme[] = [
  {
    id: "1",
    title: "Russia-Ukraine War",
    image: "https://source.unsplash.com/600x400/?war",
    tags: ["Global", "Conflict"],
    overview:
      "The Russia-Ukraine conflict, beginning in 2022, remains one of the most significant global crises. It has reshaped geopolitics, strained energy markets, and tested international alliances. While frontline dynamics shift, sanctions and diplomacy continue to dominate the global agenda.",
    chronology: [
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
      {
        date: "2023–2024",
        event: "Prolonged conflict with sanctions and shifting alliances.",
        link: "https://www.reuters.com/world/europe",
      },
    ],
    analysis: {
      stakeholders: ["Ukrainian government", "Russian government", "NATO allies"],
      faqs: [
        "What caused the war?",
        "How has NATO responded?",
        "What are the humanitarian impacts?",
      ],
      future: [
        "Could there be a ceasefire in 2025?",
        "Will sanctions reshape Russia’s economy permanently?",
      ],
    },
  },
  {
    id: "2",
    title: "Indian Politics",
    image: "https://source.unsplash.com/600x400/?parliament",
    tags: ["Politics", "India"],
    overview:
      "Indian politics in 2025 is defined by coalition dynamics, regional movements, and debates over reforms. The government faces challenges balancing economic priorities with social policies, while opposition parties push for greater accountability.",
    chronology: [
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
    analysis: {
      stakeholders: ["BJP", "Opposition parties", "Civil society groups"],
      faqs: [
        "What are the key reforms under debate?",
        "How has voter sentiment shifted since 2019?",
      ],
      future: [
        "Will coalition politics reshape policy in 2025?",
        "Could regional parties gain more influence?",
      ],
    },
  },
];
