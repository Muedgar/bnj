import { LucideIcon } from "lucide-react";
import { ILocation } from "./location.interface";
import { visibilitySettings } from "@/enums";
import { IMedia } from "./media.interface";

export type IItem = {
    id: string;
    name?: string;
    icon?: LucideIcon;
    href?: string;
    spaceUrl?: string;
    description?: string;
    summary?: string;
    url?: string;
    presentedBy?: string;
    image?: string;
    contactPhone?: string;
    contactName?: string;
    contactEmail?: string;
    location?: ILocation;
    visibility?: visibilitySettings;
    media?: IMedia;
    category: string;
    subcategory: string;
}