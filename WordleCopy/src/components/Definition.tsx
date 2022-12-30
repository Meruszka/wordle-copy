import React, { useState, useEffect } from 'react';
import { useDefinition } from '../hooks/useDefinition';
import PropTypes from 'prop-types';

function Definition({ word }: { word: string | null }) {
    const [definition, setDefinition] = useState<string | null>(null);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [definitionData, definitionError, definitionLoading] = useDefinition(word);

    useEffect(() => {
        setDefinition(definitionData?.[0]?.meanings[0]?.definitions[0]?.definition);
    }, [definitionData]);

    // useEffect(() => {
    //     if (definitionError) {
    //         console.log(definitionError);
    //     }
    // }, [definitionError]);

    // useEffect(() => {
    //     if (definitionLoading) {
    //         console.log(definitionLoading);
    //     }
    // }, [definitionLoading]);

    return (
        <div className="definition">
            <h1>{definition}</h1>
        </div>
    );
}

Definition.propsTypes = {
    word: PropTypes.string.isRequired,
};

export default Definition;
