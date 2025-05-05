import { visibilitySettings } from "@/enums";
import { IItem } from "@/interfaces";
import { HouseIcon } from "lucide-react";

// Video paths from /public
const video1 = "/kabuga_estate_video/LONG-INTRO-480p-MP4 (4).mp4";
const video2 = "/kabuga_estate_video/LONG-INTRO-480p-MP4-Defurnished (3).mp4";
const video3 = "/kabuga_estate_video/SHORT-INTRO-480p-MP4 (4).mp4";
const video4 = "/kabuga_estate_video/SHORT-INTRO-480p-MP4-Defurnished (2).mp4";

// Images can still be imported (not from public)
import image1 from './images/KABUGA-HILL-SIDE-ESTATE-Living-Room.jpg';
import image2 from './images/KABUGA-HILL-SIDE-ESTATE-Living-Room 2.jpg';
import image3 from './images/KABUGA-HILL-SIDE-ESTATE-Kitchen.jpg';
import image4 from './images/KABUGA-HILL-SIDE-ESTATE-Bedroom 2.jpg';
import image5 from './images/KABUGA-HILL-SIDE-ESTATE-Office-Defurnished.jpg';

export const kabuga_estate: IItem = {
  id: "df71c8aa-a8f5-421a-9a39-073e56324f70",
  name: "Kabuga Hill Side Estate – Kigali Rwanda 3D Virtual Tour",
  icon: HouseIcon,
  href: "/item/df71c8aa-a8f5-421a-9a39-073e56324f70",
  spaceUrl: "https://my.matterport.com/show/?m=MKgDBYN4Hax",
  description:
    "Experience Kabuga Hill Side Estate in Kigali, Rwanda through an immersive 3D virtual tour. Explore the full interior including living rooms, kitchen, bedrooms, and office space in both furnished and unfurnished views.",
  summary:
    "Take a full 3D virtual tour of Kabuga Hill Side Estate in Kigali – one of Rwanda’s top residential properties with high-end finishes and spacious rooms.",
  url: "https://www.rwanda3dvirtualtours.com/item/df71c8aa-a8f5-421a-9a39-073e56324f70",
  presentedBy: "Rwanda 3D Virtual Tours",
  image: image1.src,
  contactPhone: "",
  contactName: "",
  contactEmail: "",
  location: {
    country: "Rwanda",
    street: "KABUGA HILL SIDE ESTATE",
    unit: "Sebeya Road, House 170",
    city: "Kigali",
    province: "Kigali City"
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2, video3, video4],
    images: [
      image1.src, // alt: "Living room – Kabuga Hill Side Estate 3D tour Rwanda"
      image2.src, // alt: "Modern living room – Kabuga Estate Kigali virtual tour"
      image3.src, // alt: "Kitchen interior – Kigali Hill Side estate virtual tour"
      image4.src, // alt: "Bedroom with natural light – Kabuga Kigali 3D walkthrough"
      image5.src  // alt: "Office space (unfurnished) – Residential estate in Rwanda"
    ]
  },
  category: 'Houses',
  subcategory: 'Residential property'
};
