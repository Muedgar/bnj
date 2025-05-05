import { visibilitySettings } from "@/enums";
import { IItem } from "@/interfaces";
import { HouseIcon } from "lucide-react";

// Video paths from /public
const video1 = "/house_1_video/LONG-INTRO-480p-MP4 (2).mp4";
const video2 = "/house_1_video/SHORT-INTRO-480p-MP4 (2).mp4";

// Images can still be imported (not from public)
import image1 from './images/House--Living-Room.jpg';
import image2 from './images/House--Kitchen.jpg';
import image3 from './images/House--Bedroom.jpg';
import image4 from './images/House--Bedroom 7.jpg';
import image5 from './images/House--Bathroom.jpg';

export const house_1: IItem = {
  id: "bdb2bb1c-b4cc-4c87-b84d-dbf85997ff3a",
  name: "Modern Residential House in Musanze – Rwanda 3D Virtual Tour",
  icon: HouseIcon,
  href: "/item/bdb2bb1c-b4cc-4c87-b84d-dbf85997ff3a",
  spaceUrl: "https://my.matterport.com/show/?m=tr4cfaEwEPL",
  description:
    "Take a 3D virtual tour of a modern residential house in Musanze, Rwanda. Explore detailed interiors including the living room, kitchen, bedrooms, and bathrooms through immersive walkthrough videos and images.",
  summary:
    "Explore a well-designed residential property in Musanze via a high-quality 3D virtual tour. Ideal for buyers, renters, and real estate enthusiasts.",
  url: "https://www.rwanda3dvirtualtours.com/item/bdb2bb1c-b4cc-4c87-b84d-dbf85997ff3a",
  presentedBy: "Rwanda 3D Virtual Tours",
  image: image1.src,
  contactPhone: "",
  contactName: "",
  contactEmail: "",
  location: {
    country: "Rwanda",
    street: "Musanze",
    unit: "Mukizungu",
    city: "Musanze city",
    province: "Northern"
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2],
    images: [
      image1.src, // alt: "Living room of Musanze house – Rwanda 3D virtual tour"
      image2.src, // alt: "Kitchen interior – 3D home tour in Musanze Rwanda"
      image3.src, // alt: "Bedroom layout – Rwanda house virtual walkthrough"
      image4.src, // alt: "Additional bedroom view – Musanze virtual house tour"
      image5.src  // alt: "Modern bathroom – Residential 3D tour Rwanda"
    ]
  },
  category: 'Houses',
  subcategory: 'Residential property'
};

