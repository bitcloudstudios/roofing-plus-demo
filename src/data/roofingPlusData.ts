export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | "home"
    | "droplet"
    | "layers"
    | "wind"
    | "gutter"
    | "sun"
    | "thermometer"
    | "clipboard"
    | "hammer";
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}

export const BUSINESS_INFO = {
  name: "Roofing Plus",
  subtitle: "Home Improvements",
  tagline: "THE PEAK OF RELIABLE ROOFING",
  owner: "James D. Sykes",
  phoneDisplay: "(570) 828-9101",
  phoneHref: "tel:5708289101",
  email: "roofingplus29@yahoo.com",
  emailHref: "mailto:roofingplus29@yahoo.com",
  address: "229 Fox Road, Dingmans Ferry, PA 18328",
  serviceAreaShort: "Serving Dingmans Ferry, Pike County & Northeast PA",
  facebookUrl: "https://www.facebook.com/roofingplushomeimprovements/",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Emergency Leak Calls" },
  ],
  serviceAreas: [
    "Dingmans Ferry",
    "Milford",
    "Bushkill",
    "Matamoras",
    "Shohola",
    "Lords Valley",
    "Hawley",
    "Stroudsburg",
    "East Stroudsburg",
    "Pike County",
    "Monroe County",
    "Wayne County",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "new-roof-replacement",
    title: "New Roof Installation & Replacement Roofs",
    description:
      "Complete residential re-roofing and new roof installations built to protect your home for decades, backed by professionally warrantied work.",
    iconName: "home",
  },
  {
    id: "leak-detection-repairs",
    title: "Leak Detection & Roof Repairs",
    description:
      "Got a leak you can't seem to find? We track down the source of water intrusion around flashing, valleys, or vents and make lasting, affordable repairs.",
    iconName: "droplet",
  },
  {
    id: "shingle-tile-replacement",
    title: "Shingle & Tile Replacement",
    description:
      "Whether you need a few missing tiles replaced or a section of weathered shingles repaired, you can count on us to match and secure your roof.",
    iconName: "layers",
  },
  {
    id: "wind-storm-repairs",
    title: "Wind & Storm Repairs",
    description:
      "Timely repairs after heavy Pennsylvania winds, snow, or fallen branches to keep your home secure and prevent interior water damage.",
    iconName: "wind",
  },
  {
    id: "roof-gutter-cleaning",
    title: "Roof & Gutter Cleaning",
    description:
      "Thorough clearing of leaves, pine needles, and debris from your roof and gutters so rainwater drains properly away from your foundation.",
    iconName: "gutter",
  },
  {
    id: "skylight-installation-repair",
    title: "Skylight Installation & Repair",
    description:
      "Weathertight skylight installation and flashing repair to bring natural daylight into your home without worrying about drafts or leaks.",
    iconName: "sun",
  },
  {
    id: "energy-insulation",
    title: "Energy & Insulation Issues",
    description:
      "Your roof is a key regulator of energy use. We address attic ventilation and insulation issues to help keep your home comfortable year-round.",
    iconName: "thermometer",
  },
  {
    id: "maintenance-inspections",
    title: "Roof Maintenance Plans & Attic Inspections",
    description:
      "Routine roof and attic inspections along with practical maintenance plans to catch small wear-and-tear before it turns into a costly repair.",
    iconName: "clipboard",
  },
  {
    id: "interior-home-improvements",
    title: "Interior Home Improvements",
    description:
      "Also specializing in general interior home improvements—dependable, experienced craftsmanship for repairs and upgrades inside your home.",
    iconName: "hammer",
  },
];

export const TRUST_POINTS = [
  {
    title: "Quality Workmanship",
    description:
      "All of our roofers are experienced and held to the highest work standard. Our reputation is built on doing superior, professionally warrantied work.",
  },
  {
    title: "Honest Upfront Estimates",
    description:
      "You'll never feel pressured to get more done than needed. You'll get a complete estimate with a couple options and explanations that are plainly written.",
  },
  {
    title: "Full Clean-Up Guaranteed",
    description:
      "We treat your home and yard with respect. Every job wraps up with a thorough debris haul-away and careful cleanup around your property.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    name: "Robert & Linda K.",
    location: "Dingmans Ferry, PA",
    service: "Leak Detection & Roof Repair",
    rating: 5,
    text: "We had a stubborn leak near our chimney that two other guys couldn't figure out. James came out promptly, found the bad flashing right away, and explained what needed to be done in plain English. Dry ceilings ever since.",
  },
  {
    id: "review-2",
    name: "Mark T.",
    location: "Milford, PA",
    service: "Replacement Roof",
    rating: 5,
    text: "Honest, fair pricing with zero high-pressure sales tactics. They gave us two clear options on our written estimate, showed up when they said they would, and finished our roof on schedule.",
  },
  {
    id: "review-3",
    name: "Diane S.",
    location: "Bushkill, PA",
    service: "Storm Repair & Gutter Cleaning",
    rating: 5,
    text: "After a windstorm knocked shingles loose, Roofing Plus got us patched up quickly at a very reasonable price. When they left, our driveway and flower beds were cleaner than when they arrived.",
  },
];
