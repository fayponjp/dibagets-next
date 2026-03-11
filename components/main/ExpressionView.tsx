'use client';
import { ExpressionType } from '@/lib/types';
import { ReactNode, useState } from 'react';

function ExpressionListItem({ exp }: { exp: ExpressionType }) {
    if (exp) {
        const { expression, definitions } = exp;
        let definitionElements;
        if (definitions.length > 0) {
            definitionElements = definitions.map((def, index) => (
                <li key={index}>
                    {def.definition}
                </li>
            ));
        }

        return (
            <li className='shadow p-4 rounded-sm'>
                <h3 className='text-lg font-bold'>{expression}</h3>
                <ul>{definitionElements}</ul>
            </li>
        );
    } else {
        return <div>No Content!</div>
    }
}

export default function ExpressionView({
    firstPageContent,
}: {
    firstPageContent: Array<ExpressionType> | null;
}) {
    const [expressions, setExpressions] = useState<Array<ExpressionType> | null>(firstPageContent);
    const [page, setPage] = useState(2);
    const [hasNextContent, setHasNextContent] = useState(true);

    return (
        <ul className='flex flex-col gap-4'>
            {expressions && expressions.map((content, index) => (
                <ExpressionListItem key={index} exp={content} />
            ))}
        </ul>
    );
}
