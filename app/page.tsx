import ExpressionView from '@/components/main/ExpressionView';
import { Suspense } from 'react';
import { fetchAPI } from '@/lib/fetchAPI';
import { ExpressionType } from '@/lib/types';
export default async function Home() {
    const countData = await fetchAPI(`${process.env.NEXT_PUBLIC_URL}/api/expressions/count`) as number;
    const response = await fetchAPI(`${process.env.NEXT_PUBLIC_URL}/api/expressions`) as ExpressionType[];

    return (
        <ExpressionView content={response} singleDefinition={true}/>
    );
}
