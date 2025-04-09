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
  name: "House",
  icon: HouseIcon,
  href: "/item/bdb2bb1c-b4cc-4c87-b84d-dbf85997ff3a",
  spaceUrl: "https://my.matterport.com/show/?m=tr4cfaEwEPL",
  description: "",
  summary: "",
  url: "",
  presentedBy: "",
  image: "",
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
      image1.src,
      image2.src,
      image3.src,
      image4.src,
      image5.src,
    ]
  },
  category: 'Houses',
  subcategory: 'Residential property'
}
