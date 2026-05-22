export type RequestStatus = "Pending" | "In Progress" | "Completed";
export type RequestType =
  | "Menu Update"
  | "Hours Change"
  | "Photo Upload"
  | "Text Edit"
  | "New Page"
  | "Other";
export type Priority = "Low" | "Normal" | "High" | "Urgent";
export type Plan = "Starter" | "Growth" | "Premium";
export type WebsiteStatus = "Live" | "Draft" | "In Review" | "Offline";

export interface ChangeRequest {
  id: string;
  type: RequestType;
  priority: Priority;
  page: string;
  description: string;
  status: RequestStatus;
  submittedAt: string;
  updatedAt: string;
  clientId?: string;
  clientName?: string;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: "Food" | "Interior" | "Team" | "Events" | "Logo";
  usedOnHomepage: boolean;
  uploadedAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
  section: "Appetizers" | "Entrees" | "Drinks" | "Desserts";
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface BusinessContent {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  instagram: string;
  reservationLink: string;
  announcement: string;
  hours: BusinessHours[];
}

export interface ClientBusiness {
  id: string;
  name: string;
  ownerName: string;
  plan: Plan;
  websiteStatus: WebsiteStatus;
  openRequests: number;
  lastActivity: string;
  website: string;
}

// Golden Lantern Bistro - the demo client
export const mockBusinessContent: BusinessContent = {
  name: "Golden Lantern Bistro",
  tagline: "Modern Asian cuisine with a warm neighborhood feel",
  description:
    "We serve thoughtfully crafted Asian-inspired dishes made from locally sourced ingredients. Our kitchen blends traditional techniques with modern sensibilities — come for the food, stay for the atmosphere.",
  address: "482 Elmwood Ave, Oakland, CA 94609",
  phone: "(510) 555-0182",
  email: "hello@goldenlanternbistro.com",
  instagram: "@goldenlanternbistro",
  reservationLink: "https://resy.com/cities/oak/golden-lantern",
  announcement:
    "Now open for Sunday brunch 10am–2pm. Reservations recommended.",
  hours: [
    { day: "Monday", open: "11:30 AM", close: "9:00 PM", closed: false },
    { day: "Tuesday", open: "11:30 AM", close: "9:00 PM", closed: false },
    { day: "Wednesday", open: "11:30 AM", close: "9:00 PM", closed: false },
    { day: "Thursday", open: "11:30 AM", close: "10:00 PM", closed: false },
    { day: "Friday", open: "11:30 AM", close: "11:00 PM", closed: false },
    { day: "Saturday", open: "10:00 AM", close: "11:00 PM", closed: false },
    { day: "Sunday", open: "10:00 AM", close: "8:00 PM", closed: false },
  ],
};

export const mockRequests: ChangeRequest[] = [
  {
    id: "req-001",
    type: "Menu Update",
    priority: "High",
    page: "Menu",
    description:
      "Add our new summer specials: Mango Shrimp Salad ($18) and Yuzu Cheesecake ($9). Also remove the Winter Mushroom Soup — we're out of season.",
    status: "In Progress",
    submittedAt: "2026-05-20T14:30:00Z",
    updatedAt: "2026-05-21T09:15:00Z",
  },
  {
    id: "req-002",
    type: "Hours Change",
    priority: "Normal",
    page: "Homepage / Contact",
    description: "Update Sunday hours to 10am–8pm now that brunch is running.",
    status: "Completed",
    submittedAt: "2026-05-15T10:00:00Z",
    updatedAt: "2026-05-16T13:45:00Z",
  },
  {
    id: "req-003",
    type: "Photo Upload",
    priority: "Low",
    page: "Gallery",
    description:
      "Add the 6 new interior shots from our recent renovation to the gallery page.",
    status: "Pending",
    submittedAt: "2026-05-22T08:00:00Z",
    updatedAt: "2026-05-22T08:00:00Z",
  },
  {
    id: "req-004",
    type: "Text Edit",
    priority: "Normal",
    page: "About",
    description:
      'Update the about page bio paragraph — we hired a new head chef, Chef Maria Chen, who joined us from Chez Panisse. Please add a sentence mentioning her background.',
    status: "Pending",
    submittedAt: "2026-05-21T17:00:00Z",
    updatedAt: "2026-05-21T17:00:00Z",
  },
  {
    id: "req-005",
    type: "Text Edit",
    priority: "Urgent",
    page: "Homepage",
    description:
      "The phone number on the homepage is wrong — it shows 555-0199 but should be 555-0182. Please fix ASAP.",
    status: "Completed",
    submittedAt: "2026-05-10T11:30:00Z",
    updatedAt: "2026-05-10T12:00:00Z",
  },
];

export const mockPhotos: Photo[] = [
  {
    id: "ph-001",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    alt: "Signature ramen bowl",
    category: "Food",
    usedOnHomepage: true,
    uploadedAt: "2026-05-01",
  },
  {
    id: "ph-002",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    alt: "Restaurant interior",
    category: "Interior",
    usedOnHomepage: true,
    uploadedAt: "2026-05-01",
  },
  {
    id: "ph-003",
    src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    alt: "Dim sum platter",
    category: "Food",
    usedOnHomepage: false,
    uploadedAt: "2026-04-15",
  },
  {
    id: "ph-004",
    src: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop",
    alt: "Chef preparing dish",
    category: "Team",
    usedOnHomepage: false,
    uploadedAt: "2026-04-10",
  },
  {
    id: "ph-005",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    alt: "Grilled salmon with bok choy",
    category: "Food",
    usedOnHomepage: true,
    uploadedAt: "2026-03-22",
  },
  {
    id: "ph-006",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    alt: "Bar area with cocktails",
    category: "Interior",
    usedOnHomepage: false,
    uploadedAt: "2026-03-10",
  },
];

export const mockMenuItems: MenuItem[] = [
  // Appetizers
  {
    id: "mi-001",
    name: "Edamame Dumplings",
    description: "Handmade dumplings filled with edamame, ginger & tofu",
    price: "$12",
    available: true,
    section: "Appetizers",
  },
  {
    id: "mi-002",
    name: "Crispy Pork Belly Bao",
    description: "Pillowy steamed bun, pickled daikon, hoisin aioli",
    price: "$14",
    available: true,
    section: "Appetizers",
  },
  {
    id: "mi-003",
    name: "Winter Mushroom Soup",
    description: "Seasonal mushroom broth with crispy shallots",
    price: "$10",
    available: false,
    section: "Appetizers",
  },
  // Entrees
  {
    id: "mi-004",
    name: "Miso Glazed Black Cod",
    description: "Sake-marinated black cod, bok choy, dashi broth",
    price: "$32",
    available: true,
    section: "Entrees",
  },
  {
    id: "mi-005",
    name: "Wok-Fired Beef Tenderloin",
    description: "Five-spice dry rub, garlic fried rice, ginger scallion oil",
    price: "$36",
    available: true,
    section: "Entrees",
  },
  {
    id: "mi-006",
    name: "Mapo Tofu (V)",
    description: "Silken tofu, Sichuan chili oil, crispy mushrooms, jasmine rice",
    price: "$22",
    available: true,
    section: "Entrees",
  },
  // Drinks
  {
    id: "mi-007",
    name: "Lychee Jasmine Spritz",
    description: "Lychee, jasmine green tea, yuzu, sparkling water",
    price: "$9",
    available: true,
    section: "Drinks",
  },
  {
    id: "mi-008",
    name: "House-Made Plum Wine",
    description: "Small-batch plum wine, served chilled",
    price: "$11",
    available: true,
    section: "Drinks",
  },
  // Desserts
  {
    id: "mi-009",
    name: "Black Sesame Panna Cotta",
    description: "Creamy panna cotta, sesame brittle, honey drizzle",
    price: "$9",
    available: true,
    section: "Desserts",
  },
  {
    id: "mi-010",
    name: "Matcha Lava Cake",
    description: "Warm matcha cake, molten white chocolate center, red bean ice cream",
    price: "$11",
    available: true,
    section: "Desserts",
  },
];

export const mockClients: ClientBusiness[] = [
  {
    id: "client-001",
    name: "Golden Lantern Bistro",
    ownerName: "David Chen",
    plan: "Growth",
    websiteStatus: "Live",
    openRequests: 3,
    lastActivity: "2 hours ago",
    website: "goldenlanternbistro.com",
  },
  {
    id: "client-002",
    name: "Rosario's Trattoria",
    ownerName: "Maria Rosario",
    plan: "Starter",
    websiteStatus: "Live",
    openRequests: 1,
    lastActivity: "Yesterday",
    website: "rosariostrattoria.com",
  },
  {
    id: "client-003",
    name: "The Pho House",
    ownerName: "Linh Nguyen",
    plan: "Growth",
    websiteStatus: "In Review",
    openRequests: 5,
    lastActivity: "3 hours ago",
    website: "thephohouse.com",
  },
  {
    id: "client-004",
    name: "Taqueria El Sol",
    ownerName: "Carlos Mendez",
    plan: "Premium",
    websiteStatus: "Live",
    openRequests: 0,
    lastActivity: "3 days ago",
    website: "taqueriaelsol.com",
  },
  {
    id: "client-005",
    name: "Harbor Sushi Bar",
    ownerName: "Keiko Tanaka",
    plan: "Starter",
    websiteStatus: "Draft",
    openRequests: 2,
    lastActivity: "1 week ago",
    website: "harborsushibar.com",
  },
];

export const mockAdminRequests: ChangeRequest[] = [
  {
    id: "adm-001",
    clientId: "client-003",
    clientName: "The Pho House",
    type: "Menu Update",
    priority: "Urgent",
    page: "Menu",
    description:
      "Need to add 3 new vegan pho options for next week's soft launch. Can you update the menu page and add a Vegan section?",
    status: "Pending",
    submittedAt: "2026-05-22T07:30:00Z",
    updatedAt: "2026-05-22T07:30:00Z",
  },
  {
    id: "adm-002",
    clientId: "client-001",
    clientName: "Golden Lantern Bistro",
    type: "Menu Update",
    priority: "High",
    page: "Menu",
    description:
      "Add summer specials: Mango Shrimp Salad ($18) and Yuzu Cheesecake ($9). Remove Winter Mushroom Soup.",
    status: "In Progress",
    submittedAt: "2026-05-20T14:30:00Z",
    updatedAt: "2026-05-21T09:15:00Z",
  },
  {
    id: "adm-003",
    clientId: "client-002",
    clientName: "Rosario's Trattoria",
    type: "Hours Change",
    priority: "Normal",
    page: "Contact",
    description: "Closing early on Sundays now — 8pm instead of 10pm.",
    status: "Pending",
    submittedAt: "2026-05-21T12:00:00Z",
    updatedAt: "2026-05-21T12:00:00Z",
  },
  {
    id: "adm-004",
    clientId: "client-005",
    clientName: "Harbor Sushi Bar",
    type: "Photo Upload",
    priority: "Low",
    page: "Gallery",
    description: "Uploaded 4 new omakase photos via the dashboard.",
    status: "Pending",
    submittedAt: "2026-05-19T16:00:00Z",
    updatedAt: "2026-05-19T16:00:00Z",
  },
];
