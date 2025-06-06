import Link from 'next/link';
import React from 'react';
import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User } from 'lucide-react';

interface NavButtonProps {
    x: string;
    y: string;
    label: string;
    link: string;
    icon: string;
    newTab: boolean;
}

const getIcon = (icon: string) => {
    switch (icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
        case "about":
            return <User className='w-full h-auto' strokeWidth={1.5} />;
        case "projects":
            return <Palette className='w-full h-auto' strokeWidth={1.5} />;
        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={1.5} />;
        case "github":
            return <Github className='w-full h-auto' strokeWidth={1.5} />;
        case "linkedin":
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
        case "twitter":
            return <Twitter className='w-full h-auto' strokeWidth={1.5} />;
        case "resume":
            return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;

        default:
            break;
    }
}

const NavButton: React.FC<NavButtonProps> = ( {x, y, label, link, icon, newTab}) => {
  return (
    <div
        className='absolute cursor-pointer z-50'
        style={{
            transform: `translate(${x}, ${y})`,
        }}
    >
        <Link
            className='text-foreground rounded-full flex items-center justify-center bg-background/20
            border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset
            hover:shadow-glass-sm'
            href={link}
            target={newTab ? '_blank' : '_self'}
            aria-label={label}
        >
            <span className='relative peer w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause group-hover:text-accent'>
                {getIcon(icon)}
            </span>
            <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
            bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                {label}
            </span>
        </Link>
    </div>
  )
}

export default NavButton
