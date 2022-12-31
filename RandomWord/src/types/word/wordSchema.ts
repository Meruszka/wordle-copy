export const wordSchema = `#graphql
    type Query {
        randomWord(language: String!): String
    }

    type Mutation {
        createWord(input: WordInput): Word
        updateWord(id: ID!, input: WordInput): Word
        deleteWord(id: ID!): Word
    }

    input WordInput {
        word: String!
        language: String!
    }


    type Word {
        id: ID!
        word: String!
    }
`;

export interface Word {
    id: number;
    word: string;
    language: string;
}
