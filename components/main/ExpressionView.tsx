'use client';
import { ExpressionType, ExpressionDefinition } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';

function DefinitionOrderedListItem({
    def,
    index,
}: {
    def: ExpressionDefinition;
    index?: number;
}) {
    const {
        definition,
        example,
        CreatedAt,
        positiveVoteCount,
        negativeVoteCount,
        created_by,
    } = def;
    return (
        <li key={index} className='mt-2 ml-3'>
            <div className='flex flex-col gap-2'>
                <p>{definition}</p>
                <p className='pl-2 border-l-gray-300 text-gray-500 border-l-2 whitespace-pre-line'>
                    {example}
                </p>
            </div>
        </li>
    );
}

function DefinitionUnorderedListItem({ def } : {def: ExpressionDefinition;}) {
    const {
        definition,
        example,
        CreatedAt,
        positiveVoteCount,
        negativeVoteCount,
        created_by,
    } = def;
    return (
        <div className={`mt-2`}>
            <div className='flex flex-col gap-2'>
                <p>{definition}</p>
                <p className='pl-2 border-l-gray-300 text-gray-500 border-l-2 whitespace-pre-line'>
                    {example}
                </p>
            </div>
        </div>
    );
}

function ExpressionListItem({
    exp,
    singleDefinition,
}: {
    exp: ExpressionType;
    singleDefinition?: boolean;
}) {
    const { expression, definitions } = exp;

    let definitionElements;
    if (definitions.length > 0) {
        if (singleDefinition) {
            definitionElements = (
                <DefinitionUnorderedListItem def={definitions[0]} />
            );
        } else {
            definitionElements = definitions.map((def, index) => (
                <DefinitionOrderedListItem def={def} index={index} />
            ));
        }
    }

    return (
        <li className='p-4 bg-white rounded-sm'>
            <h3 className='text-lg font-bold'>
                <Link
                    href={`/depinisyon/${expression}`}
                    className='cursor-pointer'
                >
                    <span className='relative z-10'>
                        <span className='text-2xl'>{expression}</span>
                        <span className='absolute max-w-full h-1.25 -right-2 bottom-0 -z-1 w-full bg-[#e07a5f]'></span>
                    </span>
                </Link>
            </h3>
            {singleDefinition ? (
                definitionElements
            ) : (
                <ol className='list-decimal'>{definitionElements}</ol>
            )}
        </li>
    );
}

export default function ExpressionView({
    content,
    singleDefinition,
}: {
    content: Array<ExpressionType> | null;
    singleDefinition?: boolean;
}) {
    const [expressions, setExpressions] =
        useState<Array<ExpressionType> | null>(content);
    const [page, setPage] = useState(2);
    const [hasNextContent, setHasNextContent] = useState(true);

    return (
        <div className='px-4 lg:px-0'>
            <ul className='flex flex-col gap-6'>
                {expressions &&
                    expressions.map((content, index) => (
                        <ExpressionListItem
                            key={index}
                            exp={content}
                            singleDefinition={singleDefinition}
                        />
                    ))}
            </ul>
        </div>
    );
}
