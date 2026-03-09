'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function NavLink({ path, name }: { path: string; name: string }) {
    const pathname = usePathname();
    const isActive = pathname === `/${path}`;
    return (
        <Link
            className={`${isActive ? 'underline underline-offset-2' : ''} cursor-pointer hover:scale-105`}
            href={`/${path}`}
        >
            {name}
        </Link>
    );
}

export default function Header() {
    const [searchInput, setSearchInput] = useState<string | undefined>();
    
    return (
        <header className='py-4 bg-orange-100 w-full dark:bg-blue-950'>
            <div className='mx-auto max-w-5xl'>
                <div className='flex gap-2 align-middle'>
                    <span className='text-4xl font-patua_one '>Dibagets?</span>
                    <input type='text' className='bg-white p-2 rounded' placeholder='Maghanap' />
                </div>
                <nav className='sticky'>
                    <ul className='flex gap-4'>
                        <NavLink path='' name='Home' />
                        <NavLink path='about' name='About' />
                    </ul>
                </nav>
            </div>
        </header>
    );
}
