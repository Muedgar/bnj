import { visibilitySettings } from "@/enums";
import { IItem } from "@/interfaces";
import { HouseIcon } from "lucide-react";

// Video paths from /public
const video1 = "/amons_house_video/LONG-INTRO-480p-MP4-Defurnished (1).mp4";
const video2 = "/amons_house_video/LONG-INTRO-480p-MP4.mp4";
const video3 = "/amons_house_video/SHORT-INTRO-480p-MP4-Defurnished.mp4";

// Images can still be imported (not from public)
import image1 from './images/Mr-Amons-house-02092025_223451.jpg';
import image2 from './images/Mr-Amons-house-02152025_214423.jpg';
import image3 from './images/Mr-Amons-house-Balcony-Defurnished.jpg';
import image4 from './images/Mr-Amons-house-Balcony.jpg';
import image5 from './images/Mr-Amons-house-Bathroom 1.jpg';
import image6 from './images/Mr-Amons-house-Bathroom-Defurnished 1.jpg';

export const amons_house: IItem = {
  id: "48269e9b-cbc3-49c2-be58-651a73172a48",
  name: "Mr. Amons house",
  icon: HouseIcon,
  href: "/item/48269e9b-cbc3-49c2-be58-651a73172a48",
  spaceUrl: "https://my.matterport.com/show/?m=RBqUhqqbHu9",
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
    unit: "",
    city: "",
    province: ""
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2, video3],
    images: [
      image1.src,
      image2.src,
      image3.src,
      image4.src,
      image5.src,
      image6.src
    ]
  },
  category: 'Houses',
  subcategory: 'Residential property'
}
