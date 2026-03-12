function ExpressionPageCard() {
    return (
        <div className='flex flex-col animate-pulse space-x-4 shadow-lg p-4 bg-white'>
            <div className='flex-1 space-y-6 py-1'>
                <div className='h-4 max-w-lg rounded bg-gray-200'></div>
                <div className='space-y-3'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='col-span-1 h-4 rounded bg-gray-200'></div>
                        <div className='col-span-2 h-4 rounded bg-gray-200'></div>
                    </div>
                    <div className='h-4 rounded bg-gray-200'></div>
                </div>
            </div>
        </div>
    );
}

export default function ExpressionPageFallback() {
    return (
        <div className='mx-auto w-full max-w-6xl rounded-md flex flex-col gap-6'>
            <ExpressionPageCard />
            <ExpressionPageCard />
            <ExpressionPageCard />
        </div>
    );
}
