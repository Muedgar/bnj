import { visibilitySettings } from "@/enums";
import { IItem } from "@/interfaces";
import { HouseIcon } from "lucide-react";

// Video paths from /public
const video1 = "/roch_house_video/LONG-INTRO-480p-MP4 (1).mp4";
const video2 = "/roch_house_video/LONG-INTRO-480p-MP4-Defurnished (2).mp4";
const video3 = "/roch_house_video/SHORT-INTRO-480p-MP4 (1).mp4";
const video4 = "/roch_house_video/SHORT-INTRO-480p-MP4-Defurnished (1).mp4";

// Images can still be imported (not from public)
import image1 from './images/ROCHS-AIRBNB-Living-Room.jpg';
import image2 from './images/ROCHS-AIRBNB-Kitchen.jpg';
import image3 from './images/ROCHS-AIRBNB-Balcony-Defurnished.jpg';
import image4 from './images/ROCHS-AIRBNB-Bedroom 2.jpg';
import image5 from './images/ROCHS-AIRBNB-Bathroom-Defurnished 1.jpg';

export const roch_house: IItem = {
  id: "ea432a5f-a59c-4aad-86db-05d2e6fe5738",
  name: "ROCH'S AIRBNB",
  icon: HouseIcon,
  href: "/item/ea432a5f-a59c-4aad-86db-05d2e6fe5738",
  spaceUrl: "https://my.matterport.com/show/?m=DzwrQgyioMs",
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
    city: "MUSANZE",
    province: ""
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
  subcategory: 'AIRBNB'
}
