'use client';
import { ExpressionType } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';

function ExpressionListItem({ exp }: { exp: ExpressionType }) {
    const { expression, definitions } = exp;

    let definitionElements;
    if (definitions.length > 0) {
        definitionElements = definitions.map((def, index) => {
            const {
                definition,
                example,
                CreatedAt,
                positiveVoteCount,
                negativeVoteCount,
                created_by,
            } = def;

            return (
                <li key={index} className='mt-4 ml-3'>
                    <div className='flex flex-col gap-2'>
                        <p>{def.definition}</p>
                        <p className='px-2 border-l-gray-300 text-gray-500 border-l-2 whitespace-pre-line'>
                            {def.example}
                        </p>
                    </div>
                </li>
            );
        });
    }

    return (
        <li className='p-4 bg-white rounded-sm'>
            <Link href={`/depinisyon/${expression}`} className='cursor-pointer'>
                <h3 className='text-lg font-bold'>
                    <span className='relative z-10'>
                        <span className='text-2xl'>{expression}</span>
                        <span className='absolute max-w-full h-1.25 -right-2 bottom-0 -z-1 w-full bg-[#e07a5f]'></span>
                    </span>
                </h3>
            </Link>
            <ol className='list-decimal'>{definitionElements}</ol>
        </li>
    );
}

export default function ExpressionView({
    content,
}: {
    content: Array<ExpressionType> | null;
}) {
    const [expressions, setExpressions] =
        useState<Array<ExpressionType> | null>(content);
    const [page, setPage] = useState(2);
    const [hasNextContent, setHasNextContent] = useState(true);

    return (
        <div className='px-4 lg:px-0'>
            <ul className='flex flex-col gap-4'>
                {expressions &&
                    expressions.map((content, index) => (
                        <ExpressionListItem key={index} exp={content} />
                    ))}
            </ul>
        </div>
    );
}
