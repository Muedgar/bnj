import { ReactNode } from "react";
import NavBarDesktop from "../navbar/navbar_desktop";

export default function PanelLayout({ children }: { children: ReactNode }) {
    return (
        <main className="main-wrapper">
        <header className="fixed top-0 z-50 w-fit h-fit">
                <NavBarDesktop />
        </header>
        {children}
    </main>
    )
}