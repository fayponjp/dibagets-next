import { ReactNode, Suspense, useEffect, useState } from 'react';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DictionaryAPI, Word } from '@/app/api/dictionary';

export default function HeaderSearch() {
    const [searchTermArr, setSearchTermArr] = useState<Array<string>>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const searchInputHandler = () => {
        if (searchTerm) {
            setSearchTermArr((prevContent) => [...prevContent, searchTerm]);
        }
    };

    const [searchResultElements, setSearchResultElements] = useState<Array<ReactNode>>([]);
    const searchResultHandler = (data: Array<Word>) => {
        const searchResultMap = data.map((result, index) => (
            <li key={index}>
                <button className='p-4 bg-orange-50 border hover:bg-orange-200 focus:bg-orange-300 active:bg-orange-300 border-orange-200 w-full rounded cursor-pointer'>{result.word}</button>
            </li>
        ));
        
        setSearchResultElements(searchResultMap);
    }

    const clearSearch = () => {
        setSearchTerm('');
        setSearchResultElements([]);
    }

    useEffect(() => {
        if (searchTerm.length < 3) return;
        const timeoutID = setTimeout(async () => {
            const { data, error } = await DictionaryAPI.getWords(searchTerm);

            if (data) searchResultHandler(data);
        }, 300);

        return () => clearTimeout(timeoutID);
    }, [searchTerm]);

    return (
        <dialog
            popover=''
            className='fixed w-100 max-w-[90%] rounded-2xl m-auto open:backdrop:bg-black/20 text-gray-500'
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
                            onClick={() => clearSearch()}
                            className='ml-auto p-2 hover:bg-gray-100 rounded cursor-pointer'
                        >
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    )}
                </div>
            </header>
            <div className='text-center p-4 wrap-break-word'>
                {searchResultElements.length > 0 ? <ul className='flex flex-col gap-2'>{searchResultElements}</ul> : 'Kasaysayan ng mga hinanap'}
            </div>
        </dialog>
    );
}
