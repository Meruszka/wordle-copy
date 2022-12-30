import { buildSchema } from 'graphql';

export const wordSchema = buildSchema(`
    input WordInput {
        word: String!
        language: String!
    }

    type Word {
        id: ID!
        word: String!
    }

    type Query {
        randomWordPL: String
        randomWordEN: String
        createWord(input: WordInput): Word
        updateWord(id: ID!, input: WordInput): Word
        deleteWord(id: ID!): Word
    }

    type Mutation {
        createWord(input: WordInput): Word
    }
`)

export interface Word {
    id: number;
    word: string;
    language: string;
}

