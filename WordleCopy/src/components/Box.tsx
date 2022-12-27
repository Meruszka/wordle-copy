import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Box({goodLetter, index}:{goodLetter: string, index: number}){
    const [letter, setLetter] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('white')

    useEffect(() => {
        if(letter === ''){
            setBackgroundColor('white')
            return
        }
        if (letter === goodLetter) {
            setBackgroundColor('green')
        } else {
            setBackgroundColor('red')
        }
    }, [letter, goodLetter])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { maxLength, value, name } = event.target;
        const [fieldName, fieldIndex] = name.split('-');
        setLetter(value)
        if (value.length >= maxLength) {
            const nextInput = document.querySelector(`input[name=${fieldName}-${parseInt(fieldIndex) + 1}]`) as HTMLInputElement;
            if (nextInput) {
                nextInput.focus();
            }
        }

        if (value.length === 0) {
            const prevInput = document.querySelector(`input[name=${fieldName}-${parseInt(fieldIndex) - 1}]`) as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
            }
        }

    }

    return (
        <div className="h-10 w-10">
            <input type="text" name={`letter-${index}`} className="h-10 w-10 border-2 p-2" maxLength={1} style={{backgroundColor: backgroundColor}} onChange={(event) => handleChange(event)}/>
        </div>
    )
}

Box.propTypes = {
    goodLetter: PropTypes.string.isRequired
}

export default Box