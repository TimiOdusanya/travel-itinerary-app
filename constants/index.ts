import { NavItem, CardProps } from "./interface";

export const NavLinks: NavItem[]  = [
  { href: "/", key: "Home", text: "Home", icon: "/icons/House.svg" },
  {
    href: "/",
    key: "Dasboard",
    text: "Dashboard",
    icon: "/icons/ChartPieSlice.svg",
  },
  { href: "/", key: "Wallet", text: "Wallet", icon: "/icons/Wallet.svg" },
  {
    href: "/",
    key: "Plan a trip",
    text: "Plan a trip",
    icon: "/icons/ListChecks.svg",
  },
  {
    href: "/",
    key: "Commission for life",
    text: "Commission for life",
    icon: "/icons/HandCoins.svg",
  },
];

export const NavRight: NavItem[] = [
  {
    href: "/",
    key: "Notification",
    text: "Notification",
    icon: "/icons/Bell.svg",
  },
  {
    href: "/",
    key: "Carts",
    text: "Carts",
    icon: "/icons/Basket.svg",
  },
  {
    href: "/",
    key: "Create",
    text: "Create",
    icon: "/icons/PlusSquare.svg",
  },
];


export const SideBarMenu: NavItem[] = [
  {
    href: "/activities",
    key: "Activities",
    text: "Activities",
    icon: "/icons/RoadHorizon.svg",
  },
  {
    href: "/hotels",
    key: "Hotels",
    text: "Hotels",
    icon: "/icons/Buildings.svg",
  },
  {
    href: "/flights",
    key: "Flights",
    text: "Flights",
    icon: "/icons/AirplaneTilt.svg",
  },
  {
    href: "/",
    key: "Study",
    text: "Study",
    icon: "/icons/Student.svg",
  },
  {
    href: "/",
    key: "Visa",
    text: "Visa",
    icon: "/icons/NewspaperClipping.svg",
  },
  {
    href: "/",
    key: "Immigration",
    text: "Immigration",
    icon: "/icons/SuitcaseRolling.svg",
  },
  {
    href: "/",
    key: "Medical",
    text: "Medical",
    icon: "/icons/FirstAidKit.svg",
  },
  {
    href: "/",
    key: "Vacation Packages",
    text: "Vacation Packages",
    icon: "/icons/Package.svg",
  },
];


export const cardData: CardProps[] = [
  {
    title: "Activities",
    description: "Build, personalize, and optimize your itineraries with our trip planner.",
    buttonText: "Add Activities",
    cardColor: "#000031",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
    buttonColor: "#0D6EFD",
    buttonTextColor: "#FFFFFF",
    buttonLink: "/activities",
  },
  {
    title: "Hotels",
    description: "Build, personalize, and optimize your itineraries with our trip planner.",
    buttonText: "Add Hotels",
    cardColor: "#E7F0FF",
    titleColor: "#000000",
    descriptionColor: "#1D2433",
    buttonColor: "#0D6EFD",
    buttonTextColor: "#FFFFFF",
    buttonLink: "/hotels",
  },
  {
    title: "Flights",
    description: "Build, personalize, and optimize your itineraries with our trip planner.",
    buttonText: "Add Flights",
    cardColor: "#0D6EFD",
    titleColor: "#FFFFFF",
    descriptionColor: "#FFFFFF",
    buttonColor: "#FFFFFF",
    buttonTextColor: "#0D6EFD",
    buttonLink: "/flights",
  },
];
