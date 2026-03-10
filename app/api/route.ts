import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
)

export const DictionaryAPI = {
    async getWords(wordID?: string) {
        // const cacheKey = `words_${wordID || 'all'}`;

        // const cached = cacheService.get(cacheKey);

        // if (cached) return cached;

        let query = supabase
            .from('Words')
            .select(
                'word, tags, wordID, definition:WordDefinitions(definition), example:WordDefinitions(example), created_at'
            )

        if (wordID) {
            // query = query.ilike('word', `%${wordID}%`)
            query = query.eq('wordID', wordID)
        }
        const { data, error } = await query

        // if (!error && data) cacheService.set(cacheKey, {data, error});
        return { data, error };
    },
}