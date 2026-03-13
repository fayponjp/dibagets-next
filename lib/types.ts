export interface Expression {
    wordID: number;
    word: string;
    definition: { definition: string }[];
    created_at: string;
    example: { example: string }[];
    tags?: string[];
}

export interface ExpressionDefinition {
    definition?: string | undefined;
    example?: string | undefined;
    positiveVoteCount: number;
    negativeVoteCount: number;
    CreatedAt: string;
    created_by: string;
    word: number;
}

export interface ExpressionType {
    expression: string;
    definitions: ExpressionDefinition[] | []
}

export interface NewExpression {
    word: string;
    definition: string;
    example: string;
}