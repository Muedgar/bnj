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
  name: "LAND ROVER DISCOVERY",
  icon: HouseIcon,
  href: "/item/cc33c7f9-c932-4864-8a64-34aac8bfddd9",
  spaceUrl: "https://my.matterport.com/show/?m=ifi6pFBrQZo",
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
    street: "",
    unit: "Kigarama",
    city: "",
    province: "Kigali City"
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2],
    images: [
      image2.src,
      image1.src,
      image3.src,
      image4.src,
    ]
  },
  category: 'Cars',
  subcategory: 'Rental'
}
