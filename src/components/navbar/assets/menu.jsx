import { useState, useEffect, useRef } from 'react';
import './menu.css';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

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

    return (
        <div className='menu-position cursor-pointer ml-[20px]' ref={menuRef}>
            <button className="menu-trigger flex" onClick={handleMenu}>
                 <ChevronDown />
            </button>
            <div className="menu cursor-pointer rounded-lg" style={{ display: isOpen ? 'block' : 'none' }}>
                {['Spaces'].map((lang, index) => (
                    <Link
                        key={index}
                        href={`/#${lang.toString().toLowerCase()}`} 
                    >
                        <div className="menu-item cursor-pointer text-right pl-5"
                        style={{ 
                            animationName: isOpen ? 'unFoldAnimation' : 'none',
                            animationDuration: '0.25s',
                            animationTimingFunction: 'ease',
                            animationFillMode: 'forwards',
                            animationDelay: `${index * 0.25}s`
                        }}>
                        {lang}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
