import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const expression = searchParams.get('expression');
    const page = Number(searchParams.get('page')) | 1;

    const itemsPerPage = 10;
    const startingIndex = (page - 1) * itemsPerPage;
    const endingIndex = page * itemsPerPage - 1;

    let query = supabase
        .from('expressionsdictionary')
        .select('*')
        .range(startingIndex, endingIndex);

    if (expression) {
        query = query.ilike('expression', `%${expression}%`);
    }

    const { data, error } = await query;

    if (error)
        return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(data);
}
