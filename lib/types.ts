export interface Expression {
    wordID: number;
    word: string;
    definition: { definition: string }[];
    created_at: string;
    example: { example: string }[];
    tags?: string[];
}

export interface ExpressionType {
    expression: string;
    definitions: {
        definition?: string,
        example?: string,
        positiveVoteCount: number,
        negativeVoteCount: number,
        CreatedAt: string,
        created_by: string,
        word: number,
    }[] | []
}

export interface NewExpression {
    word: string;
    definition: string;
    example: string;
}