import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
);

export interface Expression {
    wordID: number;
    word: string;
    definition: { definition: string }[];
    created_at: string;
    example: { example: string }[];
    tags?: string[];
}

export interface NewExpression {
    word: string;
    definition: string;
    example: string;
}

export const DictionaryAPI = {
    async getWords(expression?: string) {
        let query = supabase
            .from('Words')
            .select(
                'word, tags, wordID, definition:WordDefinitions(definition), example:WordDefinitions(example), created_at',
            );

        if (expression) {
            query = query.ilike('word', `%${expression}%`);
        }
        const { data, count, error } = await query;

        return { data, error };
    },

    async getWordsByRange(page: number, searchExpression?: string, wordId?: number) {
        const itemsPerPage = 10;
        const startingIndex = (page - 1) * itemsPerPage;
        const endingIndex = page * itemsPerPage - 1;
        let query = supabase
            .from('Words')
            .select(
                'word, tags, wordID, definition:WordDefinitions(definition), example:WordDefinitions(example), created_at',
            )
            .range(startingIndex, endingIndex);
        if (searchExpression) {
            query = query.ilike('word', `%${searchExpression}%`);
        }
        if (wordId) {
            query = query.eq('wordID', wordId)
        }
        const { data, error } = await query;

        return { data, error }
    },

    async getNumberOfRecords() {
        const query = supabase.from('expressiondictionary').select('*', { count: 'exact', head: true })
        const { count, error } = await query

        return { count, error }
    },

    async addExpression(newExpression: NewExpression) {
        
    }
};
