import { fetchAPI } from '@/lib/fetchAPI';

export default async function Definition() {
        const countData = (await fetchAPI(
        `${process.env.NEXT_PUBLIC_URL}/api/expressions/count`,
    )) as number;
    return (
        <>This is the definitions page for a single expression</>
    )
}