export const wordSchema = `#graphql
    type Query {
        createWord(input: WordInput): Word
        updateWord(id: ID!, input: WordInput): Word
        deleteWord(id: ID!): Word
        randomWord(language: String!): Word
    }

    input WordInput {
        word: String!
        language: String!
    }

    type Word {
        id: ID!
        word: String!
    }
`

export interface Word {
    id: number;
    word: string;
    language: string;
}

