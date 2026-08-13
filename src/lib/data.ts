export type Module = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "Available" | "Beta";
  author: string;
  likes: number;
  views: number;
  timeAgo: string;
  gradient: string;
  url: string;
};

export const modules: Module[] = [
  {
    id: "animate",
    name: "Animate",
    description: "Turn a still piece into a short looping motion clip.",
    category: "Motion",
    status: "Available",
    author: "Studio Nourah",
    likes: 452,
    views: 19,
    timeAgo: "5mo ago",
    gradient: "from-slate-300 to-slate-500",
    url: "https://studio.metasteps.com/viewer/a5f3bc39-b5fa-4d8a-a025-ae35142e083b",

  },
  {
    id: "dimensionalize",
    name: "Dimensionalize",
    description: "Convert a 2D piece into an explorable 3D scene.",
    category: "3D",
    status: "Beta",
    author: "Hallow Museum",
    likes: 631,
    views: 30,
    timeAgo: "8mo ago",
    gradient: "from-zinc-800 to-zinc-950",
    url: "https://metasteps.com/viewer/7e0dcabc-7888-4771-9eab-fa12f525b7fe",
  },
  {
    id: "worldbuild",
    name: "Worldbuild",
    description: "Place your art inside a shared metaverse environment.",
    category: "Metaverse",
    status: "Beta",
    author: "Process Lab",
    likes: 224,
    views: 18,
    timeAgo: "6mo ago",
    gradient: "from-emerald-300 to-teal-500",
      url: "https://metasteps.com/viewer/2b018a47-2f0d-4264-973c-e8e4463eb7d6",

  },
  {
    id: "restyle",
    name: "Restyle",
    description: "Reimagine a piece in a different artistic style.",
    category: "Style",
    status: "Available",
    author: "Dominic Reyes",
    likes: 229,
    views: 10,
    timeAgo: "6mo ago",
    gradient: "from-stone-600 to-stone-800",
        url: "https://metasteps.com/viewer/2050eaea-dd43-443f-b996-c78565f067ce",

  },
  {
    id: "frequencies",
    name: "Frequencies",
    description: "Turn abstract data into a textured visual pattern.",
    category: "Abstract",
    status: "Available",
    author: "Georgia Kollia",
    likes: 120,
    views: 3,
    timeAgo: "1mo ago",
    gradient: "from-neutral-700 to-neutral-900",
        url: "https://metasteps.com/viewer/1f0f2dcd-1aa7-47ca-b582-56052640001a",

  },
  {
    id: "distant-voices",
    name: "Distant Voices",
    description: "Layer narration and archival text over a visual piece.",
    category: "Narrative",
    status: "Beta",
    author: "Kevin Roberts",
    likes: 68,
    views: 5,
    timeAgo: "6mo ago",
    gradient: "from-teal-400 to-cyan-700",
        url: "https://metasteps.com/viewer/9ac4e757-e90e-432a-a936-173eb6b2ca15",

  },
  {
    id: "biennale",
    name: "Exhibition Mode",
    description: "Package a set of pieces into a shareable exhibition.",
    category: "Exhibition",
    status: "Available",
    author: "La Biennale",
    likes: 427,
    views: 19,
    timeAgo: "7mo ago",
    gradient: "from-red-600 to-red-800",
        url: "https://metasteps.com/viewer/c30eca32-0d3e-403a-8f97-883972b0f476",

  },
  {
    id: "endhauts",
    name: "Loop Ribbon",
    description: "Add a continuous ribbon-style motion overlay.",
    category: "Motion",
    status: "Available",
    author: "Caroline Croy",
    likes: 93,
    views: 8,
    timeAgo: "4mo ago",
    gradient: "from-orange-200 to-pink-200",
        url: "https://metasteps.com/viewer/6d25837c-2af5-44b5-98bf-f29e4e3b86a1",

  },
  {
    id: "foundation",
    name: "Archive Restore",
    description: "Clean and restore an aged or low-quality piece.",
    category: "Restoration",
    status: "Available",
    author: "Foundation Env.",
    likes: 41,
    views: 6,
    timeAgo: "3mo ago",
    gradient: "from-blue-600 to-indigo-800",
        url: "https://meissenerporzellan.metasteps.com/viewer/71da00e7-3623-4f50-9499-e51428d2e889",

  },
  {
    id: "gallery-walk",
    name: "Gallery Walk",
    description: "Turn a flat collection into a walkable virtual gallery.",
    category: "3D",
    status: "Beta",
    author: "Topping CA",
    likes: 77,
    views: 12,
    timeAgo: "2mo ago",
    gradient: "from-gray-500 to-gray-700",
        url: "https://metasteps.com/viewer/085017f9-7ee6-474e-b4f3-8514b78c3352",

  },
  {
    id: "porzellan",
    name: "Virtual Fokus",
    description: "Highlight fine detail on delicate or intricate pieces.",
    category: "Detail",
    status: "Available",
    author: "M. Porzellan",
    likes: 34,
    views: 9,
    timeAgo: "9mo ago",
    gradient: "from-slate-600 to-slate-800",
        url: "https://metasteps.com/viewer/6e411e77-9c32-41ad-992e-02801265280a",

  },
  {
    id: "high-island",
    name: "Landmark Scene",
    description: "Place a piece into a large-scale landmark environment.",
    category: "Metaverse",
    status: "Beta",
    author: "Sai Kung Centre",
    likes: 156,
    views: 21,
    timeAgo: "1mo ago",
    gradient: "from-green-700 to-emerald-900",
        url: "https://metasteps.com/viewer/22d6573e-6c5e-487a-b320-34ced5a95969",

  },
];

export const categoryIcon: Record<string, string> = {
  Motion: "Wind",
  "3D": "CubeTransparent",
  Metaverse: "Globe",
  Style: "PaintBrush",
  Abstract: "Waveform",
  Narrative: "Quotes",
  Exhibition: "FrameCorners",
  Restoration: "ClockCounterClockwise",
  Detail: "MagnifyingGlass",
};
export type PricingTier = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  features: string[];
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    description: "Designed for anyone exploring the platform",
    monthlyPrice: 0,
    features: [
      "Access to Animate module",
      "Up to 3 transformations / month",
      "500MB storage",
      "Community support",
    ],
  },
  {
    id: "creator",
    name: "Creator",
    description: "Suitable for individual artists and students",
    monthlyPrice: 12,
    features: [
      "Access to all modules",
      "400 credits every month",
      "2GB storage",
      "Standard support",
    ],
  },
  {
    id: "creator-pro",
    name: "Creator Pro",
    description: "For advanced creators and small teams",
    monthlyPrice: 29,
    features: [
      "Access to all modules",
      "750 credits every month",
      "10GB storage",
      "Custom presets",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    description: "Designed for organizations and businesses",
    monthlyPrice: 89,
    features: [
      "Everything in Creator Pro",
      "5 editor seats",
      "50GB storage",
      "API access",
      "Dedicated support",
    ],
  },
];

export type EnterpriseTier = {
  id: string;
  name: string;
  description: string;
  features: string[];
};

export const enterpriseTiers: EnterpriseTier[] = [
  {
    id: "academic",
    name: "Academic Institutions",
    description: "For schools, colleges, and universities managing multiple users",
    features: [
      "Unlimited transformations",
      "Unlimited storage",
      "Team management for classes",
      "LMS integration",
      "Institutional-grade security",
    ],
  },
  {
    id: "premium-services",
    name: "Premium Services",
    description: "For organizations seeking hands-on support",
    features: [
      "Custom style training",
      "Batch processing pipeline",
      "Dedicated onboarding",
    ],
  },
];

export type CompareRow = {
  feature: string;
  description: string;
  values: [string, string, string, string];
};

export const compareFeatures: CompareRow[] = [
  {
    feature: "Module Access",
    description: "Which transformation modules you can use",
    values: ["Animate only", "All modules", "All modules", "All modules"],
  },
  {
    feature: "Monthly Credits",
    description: "Credits used per transformation run",
    values: ["3 / month", "400", "750", "Unlimited"],
  },
  {
    feature: "Storage",
    description: "Space for your uploaded and generated pieces",
    values: ["500MB", "2GB", "10GB", "50GB"],
  },
  {
    feature: "Editor Seats",
    description: "Number of team members with access",
    values: ["1", "1", "1", "5"],
  },
  {
    feature: "Priority Processing",
    description: "Faster queue position when running modules",
    values: ["-", "-", "check", "check"],
  },
  {
    feature: "API Access",
    description: "Programmatic access to run modules",
    values: ["-", "-", "-", "check"],
  },
];

export type CreditPack = {
  credits: number;
  price: number;
};

export const creditPacks: CreditPack[] = [
  { credits: 150, price: 15 },
  { credits: 300, price: 27 },
  { credits: 700, price: 59 },
  { credits: 1500, price: 119 },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "Can I use the platform for free?",
    answer:
      "Yes. The Free plan gives you access to the Animate module with 3 transformations a month, no credit card required.",
  },
  {
    question: "What payment methods can I use?",
    answer: "We accept all major credit and debit cards.",
  },
  {
    question: "Can I cancel, upgrade, or downgrade at any time?",
    answer: "Yes, you can change or cancel your plan at any time from your account settings.",
  },
  {
    question: "Can I purchase additional credits if I need more?",
    answer: "Yes, top-up credits are available for Creator and Creator Pro plans and never expire.",
  },
  {
    question: "How can I contact the sales team?",
    answer: "Use the Contact us page and select \"Partnership\" as your inquiry type.",
  },
];

export type FAQCategory = {
  category: string;
  items: FAQItem[];
};

export const faqCategories: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What does the platform actually do?",
        answer:
          "You upload a piece of art and choose a module. Each module transforms it in a different way, animation, 3D conversion, style changes, or placing it inside a shared metaverse space.",
      },
      {
        question: "Do I need any design or technical skill to use it?",
        answer:
          "No. Every module is guided, you upload, adjust a few settings, and run it.",
      },
      {
        question: "What file types can I upload?",
        answer: "Most common image formats are supported, including PNG, JPG, and WEBP.",
      },
    ],
  },
  {
    category: "Plans & Billing",
    items: [
      {
        question: "Can I use the platform for free?",
        answer:
          "Yes. The Free plan includes the Animate module with 3 transformations a month, no card required.",
      },
      {
        question: "What payment methods can I use?",
        answer: "We accept all major credit and debit cards.",
      },
      {
        question: "Can I cancel, upgrade, or downgrade at any time?",
        answer: "Yes, from your account settings, changes apply from the next billing cycle.",
      },
      {
        question: "Can I purchase additional credits if I need more?",
        answer: "Yes, top-up credits are available on Creator and Creator Pro and never expire.",
      },
      {
        question: "Is annual billing actually cheaper?",
        answer: "Yes, annual billing works out to two months free compared to paying monthly.",
      },
    ],
  },
  {
    category: "Modules & Output",
    items: [
      {
        question: "Do I own what I create?",
        answer: "Yes, anything you generate from your own uploaded art belongs to you.",
      },
      {
        question: "How long does a transformation take?",
        answer:
          "Most modules finish in under a minute. Paid plans get priority processing for faster results.",
      },
      {
        question: "Can I redo a transformation if I don't like the result?",
        answer: "Yes, use \"Try another\" on the result screen to rerun with different settings.",
      },
    ],
  },
  {
    category: "Account & Support",
    items: [
      {
        question: "How can I contact the team?",
        answer: "Use the Contact us page and select the inquiry type that fits your question.",
      },
      {
        question: "Do you offer support for teams or institutions?",
        answer:
          "Yes, the Business plan and our Academic Institutions and Premium Services options include dedicated support.",
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "may-release",
    title: "The new platform is here",
    excerpt: "Bring the art you already have to life, seamlessly.",
    date: "May 2026",
  },
  {
    slug: "designing-modules",
    title: "Designing modules that feel alive",
    excerpt: "A behind-the-scenes look at how we approach each transformation module.",
    date: "April 2026",
  },
  {
    slug: "3d-to-intelligent-worlds",
    title: "From static pieces to intelligent worlds",
    excerpt: "AI is turning simple uploads into an explorable, understanding ecosystem.",
    date: "March 2026",
  },
  {
    slug: "building-not-apps",
    title: "Building living spaces, not apps",
    excerpt: "Adoption stalls on content, not hardware. Here's how we're fixing that.",
    date: "February 2026",
  },
];