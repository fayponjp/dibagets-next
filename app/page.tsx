import ExpressionView from '@/components/main/ExpressionView';
import { Suspense, ReactNode } from 'react';

export default async function Home() {
    // const { data, error: getWordError } = await DictionaryAPI.getWordsByRange(1);
    // const { data: regData, error: getRegError } = await DictionaryAPI.getExpressionsByInput(1);
    const countResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/expressions/count`);
    if (!countResponse.ok) {

    }
    const countData = await countResponse.json();
    console.log(countData);

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/expressions`);
    if (!response.ok) {

    }

    const data = await response.json();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ExpressionView firstPageContent={data} />
        </Suspense>
    );
}
