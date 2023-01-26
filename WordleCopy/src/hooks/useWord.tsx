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
    if (import.meta.env.MODE === 'development') {
        const WORDS = [
            'zasłużony',
            'przymusowy',
            'przeładunkowy',
            'szalony',
            'mdły',
            'reklamacyjny',
            'kolportować',
            'uwalcować',
            'malutenieczki',
            'powydrapywać',
            'uderzający',
            'przetrzymywać',
            'zaniedbywać',
            'poszatkować',
            'wrażliwy',
            'drenować',
            'domurowywać',
            'królewski',
            'dobroduszny',
            'definiować',
            'popadywać',
            'zsyntetyzować',
            'oklepywać',
            'dosiebny',
            'indywidualistyczny',
            'dydaktyczny',
            'klasycyzować',
            'zasobny',
            'lukrować',
            'nieodparty',
            'podczołgiwać',
            'strzelniczy',
            'przesiąkliwy',
            'bezpłodny',
            'pełnoletni',
            'zahipnotyzowany',
            'przeszacowywać',
            'oschły',
            'wdeptywać',
            'dostateczny',
            'kosmiczny',
            'używać',
            'lawiniasty',
            'morsować',
            'imperatywny',
            'widokowy',
            'neurologiczny',
            'błyskowy',
            'oczarować',
            'mikrofilmować',
            'wyhodowywać',
            'nieprzydatny',
            'jajowaty',
            'tygodniowy',
            'barwny',
            'obsztorcować',
            'kwasoodporny',
            'trywialny',
            'polotny',
            'nieznośny',
            'oskarżycielski',
            'konwencjonalizować',
            'bezcelowy',
            'epizować',
            'zainsynuować',
            'kryminalny',
            'kotonizować',
            'instalacyjny',
            'ostębnować',
            'ostentacyjny',
            'partyzancki',
            'międzyuczelniany',
            'pociągły',
            'obupłciowy',
            'rzymski',
            'wbudować',
            'podkrzesywać',
            'racjonalny',
            'wydłużony',
            'namiestnikować',
            'upacykować',
            'lumpować',
            'smrodliwy',
            'referować',
            'poskubywać',
            'wypikować',
            'galwanizować',
            'wypoziomować',
            'wyczołgiwać',
            'dalekowschodni',
            'belować',
            'amalgamować',
            'homonimiczny',
            'limanowy',
            'zitalizować',
            'znużony',
            'powykopywać',
            'hieratyzować',
            'przemontować',
            'stornować',
        ];
        const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        return [
            {
                randomWord: randomWord,
            },
            null,
            false,
        ] as const;
    } else {
        const WORD_QUERY = language === 'pl' ? WORD_QUERY_PL : WORD_QUERY_EN;
        const { data, error, loading } = useQuery(WORD_QUERY);
        return [data, error, loading] as const;
    }
};
