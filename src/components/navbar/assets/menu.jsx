import { useState, useEffect, useRef } from 'react';
import './menu.css';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter()

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNav = (navigationId) => {
        router.push(`/#${navigationId.toString().toLowerCase()}`)
    }

    return (
        <div className='menu-position cursor-pointer ml-[20px]' ref={menuRef}>
            <button className="menu-trigger flex" onClick={handleMenu}>
                 <ChevronDown />
            </button>
            <div className="menu cursor-pointer rounded-lg" style={{ display: isOpen ? 'block' : 'none' }}>
                {['Spaces'].map((lang, index) => (
                    <p
                        key={index}
                        onClick={() => handleNav(lang)}
                        className="menu-item cursor-pointer text-right pl-5"
                        style={{ 
                            animationName: isOpen ? 'unFoldAnimation' : 'none',
                            animationDuration: '0.25s',
                            animationTimingFunction: 'ease',
                            animationFillMode: 'forwards',
                            animationDelay: `${index * 0.25}s`
                        }}
                    >
                        {lang}
                    </p>
                ))}
            </div>
        </div>
    );
}
