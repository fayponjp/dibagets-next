'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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

function SearchPopover() {
    return (
        <dialog popover='' className='inset-0 fixed rounded m-auto open:backdrop:bg-black/20' id='search-popover'>
            <header>
                <div className='p-2'>
                    <input type='text' />
                </div>
            </header>
        </dialog>
    );
}

export default function Header() {
    const [searchInput, setSearchInput] = useState<string | undefined>();

    return (
        <header className='py-4 bg-orange-100 w-full  p-4 lg:px-0'>
            <div className='mx-auto max-w-6xl flex flex-col gap-2 lg:flex-row justify-between'>
                <span className='text-4xl font-patua_one '>Dibagets?</span>
                <div className='flex flex-row gap-4'>
                    <button
                        popoverTarget='search-popover'
                        className='hover:bg-gray-50 rounded w-50 bg-gray-100 text-gray-500 p-2 items-center text-sm cursor-pointer flex justify-between'
                    >
                        Maghanap <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <SearchPopover />
                    <nav className='sticky flex gap-4 items-center'>
                        <NavLink path='' name='Home' />
                        <NavLink path='about' name='About' />
                    </nav>
                </div>
            </div>
        </header>
    );
}
