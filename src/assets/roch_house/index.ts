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
  name: "ROCH'S AIRBNB – 3D Virtual Tour in Musanze, Rwanda",
  icon: HouseIcon,
  href: "/item/ea432a5f-a59c-4aad-86db-05d2e6fe5738",
  spaceUrl: "https://my.matterport.com/show/?m=DzwrQgyioMs",
  description:
    "Explore ROCH'S Airbnb in Musanze, Rwanda with a fully immersive 3D virtual tour. This modern rental offers a beautifully furnished living space perfect for short-term stays and Airbnb guests. Walk through the home digitally and experience its layout, rooms, and views before you visit.",
  summary:
    "Take a 3D virtual tour of ROCH'S Airbnb in Musanze, Rwanda. Discover a cozy, stylish home ideal for travelers, digital nomads, or business trips. Includes kitchen, living room, balcony, and more.",
  url: "https://www.rwanda3dvirtualtours.com/item/ea432a5f-a59c-4aad-86db-05d2e6fe5738",
  presentedBy: "Rwanda 3D Virtual Tours",
  image: image1.src,
  contactPhone: "",
  contactName: "Roch",
  contactEmail: "",
  location: {
    country: "Rwanda",
    street: "",
    unit: "",
    city: "MUSANZE",
    province: "Northern Province"
  },
  visibility: visibilitySettings.Public,
  media: {
    videos: [video1, video2, video3, video4],
    images: [
      image1.src, // alt: "ROCH'S Airbnb Living Room – Rwanda 3D Tour"
      image2.src, // alt: "ROCH'S Airbnb Kitchen in Musanze"
      image3.src, // alt: "Balcony view – ROCH'S Airbnb Rwanda virtual tour"
      image4.src, // alt: "Bedroom interior – Airbnb Musanze 3D tour"
      image5.src, // alt: "Bathroom view – ROCH'S Airbnb Rwanda"
    ]
  },
  category: 'Houses',
  subcategory: 'AIRBNB'
};
