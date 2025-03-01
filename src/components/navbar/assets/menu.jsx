import { useState, useEffect, useRef } from 'react';
import './menu.css';
import { ChevronDown } from 'lucide-react';

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
                <span>English</span> <ChevronDown />
            </button>
            <div className="menu cursor-pointer rounded-lg" style={{ display: isOpen ? 'block' : 'none' }}>
                {['English', 'Francais', 'Kinyarwanda'].map((lang, index) => (
                    <p
                        key={lang}
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
