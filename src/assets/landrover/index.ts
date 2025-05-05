import { visibilitySettings } from "@/enums";
import { IItem } from "@/interfaces";
import { HouseIcon } from "lucide-react";

// Video paths from /public
const video1 = "/landrover_video/LONG-INTRO-480p-MP4 (3).mp4";
const video2 = "/landrover_video/SHORT-INTRO-480p-MP4 (3).mp4";

// Images can still be imported (not from public)
import image1 from './images/LAND-ROVER-DISCOVERY-Photo-1.jpg';
import image2 from './images/LAND-ROVER-DISCOVERY-02092025_223315.jpg';
import image3 from './images/LAND-ROVER-DISCOVERY-Photo-3.jpg';
import image4 from './images/LAND-ROVER-DISCOVERY-02092025_223253.jpg';

export const landrover: IItem = {
  id: "cc33c7f9-c932-4864-8a64-34aac8bfddd9",
  name: "Land Rover Discovery – Rwanda 3D Virtual Car Tour",
  icon: HouseIcon,
  href: "/item/cc33c7f9-c932-4864-8a64-34aac8bfddd9",
  spaceUrl: "https://my.matterport.com/show/?m=ifi6pFBrQZo",
  description:
    "Explore the rugged and luxurious Land Rover Discovery through an immersive 3D virtual tour in Rwanda. View every interior and exterior detail before booking or renting.",
  summary:
    "Take a 3D walkthrough of the Land Rover Discovery – perfect for rentals, test drives, or car enthusiasts looking to explore premium SUVs in Rwanda.",
  url: "https://www.rwanda3dvirtualtours.com/item/cc33c7f9-c932-4864-8a64-34aac8bfddd9",
  presentedBy: "Rwanda 3D Virtual Tours",
  image: image2.src,
  contactPhone: "",
  contactName: "",
  contactEmail: "",
  location: {
    country: "Rwanda",
    street: "",
    unit: "Kigarama",
    city: "Kigali",
    province: "Kigali City"
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2],
    images: [
      image2.src, // alt: "Land Rover Discovery front view – Kigali car tour"
      image1.src, // alt: "Land Rover Discovery side profile – 3D car tour Rwanda"
      image3.src, // alt: "Land Rover Discovery dashboard and interior – Kigali"
      image4.src  // alt: "Rear view of Land Rover Discovery – 3D virtual tour"
    ]
  },
  category: 'Cars',
  subcategory: 'Rental'
};
