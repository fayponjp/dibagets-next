import { Suspense, useEffect, useState } from 'react';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DictionaryAPI } from '@/app/api/route';

async function getWordData() {
    const { data, error } = await DictionaryAPI.getWords();

    if (data) {
        console.log(data)
    } else if (error) {
        console.error(error);
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            thing
        </Suspense>
    )
}

export default function HeaderSearch() {
    const [searchTermArr, setSearchTermArr] = useState<Array<string>>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const searchInputHandler = () => {
        if (searchTerm) {
            setSearchTermArr((prevContent) => [...prevContent, searchTerm]);
        }
    };

    useEffect(() => {
        getWordData();
    }, [])
    return (
        <dialog
            popover=''
            className='fixed border-orange-100 border w-100 max-w-[90%] rounded-2xl m-auto open:backdrop:bg-black/20 text-gray-500'
            id='search-popover'
        >
            <header className='border-b border-gray-300 p-4'>
                <div className='flex flex-row gap-2 items-center h-12 text-base'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input
                        className='border-0 max-w-50 focus:outline-none'
                        type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className='ml-auto p-2 hover:bg-gray-100 rounded cursor-pointer'
                        >
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    )}
                </div>
            </header>
            <div className='text-center p-4 wrap-break-word'>
                {searchTermArr.length > 0 ? '' : 'Kasaysayan ng mga hinanap'}
            </div>
        </dialog>
    );
}
