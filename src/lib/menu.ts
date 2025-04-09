import { amons_house } from "@/assets/amons_house";
import { house_1 } from "@/assets/house_1";
import { kabuga_estate } from "@/assets/kabuga_estate";
import { landrover } from "@/assets/landrover";
import { roch_house } from "@/assets/roch_house";
import { IItem } from "@/interfaces";
import { CarIcon, FolderIcon, HouseIcon, LucideIcon } from "lucide-react"

type category = {
    name: string;
    icon: LucideIcon;
    href: string;
    menu: subcategory[];
}

type subcategory = {
    name: string;
    icon: LucideIcon;
    href: string;
    menu: IItem[];
}


export function getMenu(): category[] {
    return [
        {
            name: "Houses",
            icon: FolderIcon,
            href: "/?tab=houses",
            menu: [
                {
                    name: "Airbnb",
                    icon: HouseIcon,
                    href: "/houses/airbnb",
                    menu: [
                        house_1
                    ]
                },
                {
                    name: "VRBO",
                    icon: HouseIcon,
                    href: "/houses/vrbo",
                    menu: [
                        amons_house
                    ]
                },
                {
                    name: "VRBO",
                    icon: HouseIcon,
                    href: "/houses/vrbo",
                    menu: [
                        kabuga_estate
                    ]
                },
                {
                    name: "VRBO",
                    icon: HouseIcon,
                    href: "/houses/vrbo",
                    menu: [
                        roch_house
                    ]
                }
            ]
        },
        {
            name: "Cars",
            icon: FolderIcon,
            href: "/?tab=cars",
            menu: [
                {
                    name: "Luxury Cars",
                    icon: CarIcon,
                    href: "/cars/luxury",
                    menu: [
                        landrover
                    ]
                }
            ]
        }
    ]
}