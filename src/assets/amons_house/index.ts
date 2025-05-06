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
  name: "Mr. Amon's House – Rwanda Residential 3D Virtual Tour",
  icon: HouseIcon,
  href: "/item/48269e9b-cbc3-49c2-be58-651a73172a48",
  spaceUrl: "https://my.matterport.com/show/?m=RBqUhqqbHu9",
  description:
    "Step inside Mr. Amon’s residential house through a fully interactive 3D virtual tour. This beautiful Rwandan home blends traditional charm with modern finishes and is now available to explore online. Perfect for prospective buyers, renters, or anyone interested in real estate in Rwanda.",
  summary:
    "Take a 3D virtual tour of Mr. Amon’s house – a residential property in Rwanda featuring spacious interiors, multiple bathrooms, and balcony views.",
  url: "https://www.rwanda3dvirtualtours.com/item/48269e9b-cbc3-49c2-be58-651a73172a48",
  presentedBy: "Rwanda 3D Virtual Tours",
  image: image1.src,
  contactPhone: "",
  contactName: "Mr. Amon",
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
      image1.src, // alt: "Living Room – Mr. Amon’s House Rwanda 3D Tour"
      image2.src, // alt: "Interior view – Mr. Amon’s Home Kigali"
      image3.src, // alt: "Balcony (unfurnished) – Residential Rwanda tour"
      image4.src, // alt: "Balcony with view – Amon's Kigali house"
      image5.src, // alt: "Modern bathroom – Mr. Amon’s Kigali house"
      image6.src  // alt: "Unfurnished bathroom – Kigali 3D residential tour"
    ]
  },
  category: 'Houses',
  subcategory: 'Residential property'
};

