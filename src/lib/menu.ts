import { FolderIcon, HouseIcon, LucideIcon } from "lucide-react"

type category = {
    name: string;
    icon: LucideIcon;
    href: string;
    menu: subcategory[];
}

enum visibilitySettings {
    public = "public",
    private = "private",
    hidden = "hidden"
}

type subcategory = {
    name: string;
    icon: LucideIcon;
    href: string;
    menu: item[];
}

type location = {
    country: string;
    street: string;
    unit: string;
    city: string;
    province: string;
}

type media = {
    videos: string[];
    images: string[];
}

type item = {
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
    location?: location;
    visibility?: visibilitySettings;
    media?: media;
    createdBy?: string;
    createdAt?: string;
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
                        {
                            id: "1",
                            name: "House 1",
                            icon: HouseIcon,
                            href: "/houses/airbnb/1",
                            spaceUrl: "/houses/airbnb/1",
                            description: "This is a description of House 1",
                            summary: "This is a summary of House 1",
                            url: "https://airbnb.com/house1",
                            presentedBy: "John Doe",
                            image: "https://via.placeholder.com/150",
                            contactPhone: "123-456-7890",
                            contactName: "John Doe",
                            contactEmail: "",
                            location: {
                                country: "USA",
                                street: "123 Main St",
                                unit: "Apt 1",
                                city: "New York",
                                province: "NY"
                            },
                            visibility: visibilitySettings.public,
                            media: {
                                videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
                                images: ["https://via.placeholder.com/150"]
                            },
                            createdBy: "Jane Smith",
                            createdAt: "2023-10-01T00:00:00Z"
                        },
                    ]
                },
                {
                    name: "VRBO",
                    icon: HouseIcon,
                    href: "/houses/vrbo",
                    menu: [
                        {
                            id: "2",
                            name: "House 2",
                            icon: HouseIcon,
                            href: "/houses/vrbo/2",
                            spaceUrl: "/houses/vrbo/2",
                            description: "This is a description of House 2",
                            summary: "This is a summary of House 2",
                            url: "https://vrbo.com/house2",
                            presentedBy: "Jane Smith",
                            image: "https://via.placeholder.com/150",
                            contactPhone: "987-654-3210",
                            contactName: "Jane Smith",
                            contactEmail: "",
                            location: {
                                country: "USA",
                                street: "456 Elm St",
                                unit: "Apt 2B",
                                city: "Los Angeles",
                                province: "CA"
                            },
                            visibility: visibilitySettings.private,
                            media: {
                                videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
                                images: ["https://via.placeholder.com/150"]
                            },
                            createdBy: "John Doe",
                            createdAt: "2023-10-01T00:00:00Z"
                        },
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
                    icon: HouseIcon,
                    href: "/cars/luxury",
                    menu: [
                        {
                            id: "3",
                            name: "Car 1",
                            icon: HouseIcon,
                            href: "/cars/luxury/1",
                            spaceUrl: "/cars/luxury/1",
                            description: "This is a description of Car 1",
                            summary: "This is a summary of Car 1",
                            url: "https://luxurycars.com/car1",
                            presentedBy: "Alice Johnson",
                            image: "https://via.placeholder.com/150",
                            contactPhone: "555-123-4567",
                            contactName: "Alice Johnson",
                            contactEmail: "",
                            location: {
                                country: "USA",
                                street: "789 Oak St",
                                unit: "Apt 3C",
                                city: "Chicago",
                                province: "IL"
        },
                            visibility: visibilitySettings.hidden,
                            media: {
                                videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
                                images: ["https://via.placeholder.com/150"]
                            },
                            createdBy: "Bob Brown",
                            createdAt: "2023-10-01T00:00:00Z"
                        },
                    ]
                }
            ]
        }
    ]
}