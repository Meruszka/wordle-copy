import { gql, useQuery } from '@apollo/client';

const WORD_QUERY_PL = gql`
    {
        randomWord(language: "pl")
    }
`;

const WORD_QUERY_EN = gql`
    {
        randomWord(language: "en")
    }
`;

export const useWord = ({ language }: { language: string }) => {
    const WORD_QUERY = language === 'pl' ? WORD_QUERY_PL : WORD_QUERY_EN;
    const { data, error, loading } = useQuery(WORD_QUERY);

    return [data, error, loading] as const;
};
