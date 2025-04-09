import { ReactNode } from "react";
import NavBarDesktop from "../navbar/navbar_desktop";

export default function PanelLayout({ children }: { children: ReactNode }) {
    return (
        <div className="main-wrapper">
        <div className="fixed top-0 z-50 w-fit h-fit">
                <NavBarDesktop />
        </div>
        {children}
    </div>
    )
}