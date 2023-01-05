export const wordSchema = `#graphql
    type Query {
        randomWord(language: String!): String
    }

    type Mutation {
        createWord(input: WordInput): String
        deleteWord(input: WordInput): String
        updateWord(input: WordInput): String
    }

    input WordInput {
        word: String!
        language: String!
    }
`;
