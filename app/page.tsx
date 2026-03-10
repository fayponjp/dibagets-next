import { DictionaryAPI, Expression } from './api/dictionary';
import { Suspense, ReactNode } from 'react';

export default async function Home() {
    const { data, error: getWordError } = await DictionaryAPI.getWordsByRange(1);
    let processedData;
    if (data) {
        processedData = data.map((wordObj, index) => (
            <li key={index} className='p-2 shadow rounded'>
                <h3>{wordObj.word}</h3>
                <p>{}</p>
            </li>
        ));
    } else if (getWordError) {
        console.error(getWordError);
    }

    const { count, error: countError } = await DictionaryAPI.getNumberOfRecords();
    if (count) console.log(count);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ul className='flex flex-col gap-4'>{processedData}</ul>
        </Suspense>
    );
}
