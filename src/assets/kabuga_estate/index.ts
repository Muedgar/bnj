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
  name: "KABUGA HILL SIDE ESTATE",
  icon: HouseIcon,
  href: "/item/df71c8aa-a8f5-421a-9a39-073e56324f70",
  spaceUrl: "https://my.matterport.com/show/?m=MKgDBYN4Hax",
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
    street: "KABUGA HILL SIDE ESTATE",
    unit: "sebeya road house 170",
    city: "Kigali",
    province: "Kigali City"
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2, video3, video4],
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
