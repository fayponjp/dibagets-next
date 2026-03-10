'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeaderSearch from './header-search';

function NavLink({ path, name }: { path: string; name: string }) {
    const pathname = usePathname();
    const isActive = pathname === `/${path}`;
    return (
        <Link
            className={`${isActive ? 'underline underline-offset-2' : ''} cursor-pointer hover:bg-orange-50 p-2 rounded`}
            href={`/${path}`}
        >
            {name}
        </Link>
    );
}

export default function Header() {
    const [searchInput, setSearchInput] = useState<string | undefined>();

    return (
        <header className='py-4 bg-orange-100 w-full p-4 lg:px-0'>
            <div className='mx-auto max-w-6xl flex flex-col gap-2 lg:flex-row justify-between'>
                <span className='text-4xl font-patua_one '>Dibagets?</span>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <button
                        popoverTarget='search-popover'
                        className='rounded w-50 bg-gray-50 text-gray-500 hover:bg-gray-200 p-2 items-center text-sm cursor-pointer flex justify-between'
                    >
                        Maghanap <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <HeaderSearch />
                    <nav className='sticky flex items-center'>
                        <NavLink path='' name='Home' />
                        <NavLink path='about' name='About' />
                    </nav>
                </div>
            </div>
        </header>
    );
}
