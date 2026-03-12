import ExpressionView from '@/components/main/ExpressionView';
import { fetchAPI } from '@/lib/fetchAPI';
import { ExpressionType } from '@/lib/types';
import { use } from 'react';

export default async function Definition({ params } : { params: Promise<{ definition: string}>}) {
    const { definition } = await params;
    const response = await fetchAPI(`${process.env.NEXT_PUBLIC_URL}/api/expressions?expression=${definition}`) as ExpressionType[];
    return (
        <ExpressionView content={response} />
    );
}