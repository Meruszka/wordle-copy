import { useEffect, useState } from 'react'
import Box from './Box'

function Game() {
  const [word, setWord] = useState<string | null>(null)
  const [definition, setDefinition] = useState<string | null>(null)
  const [round, setRound] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      const wordRes = await fetch('https://random-word-api.herokuapp.com/word')
      const word = await wordRes.json()
      setWord(word[0])

      const definitionRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word[0]}`)
      if (definitionRes.status === 404) {
        setDefinition('No definition found') 
      }else{
        const defin = await definitionRes.json()
        setDefinition(defin[0].meanings[0].definitions[0].definition)
      }
    }
    fetchData()
  }, [round])

  const handleClick = () => {
    word?.split('').forEach((letter, index) => {
      const input = document.querySelector(`input[name=letter-${index}]`) as HTMLInputElement
      input.value = ''
    })
    setRound(round + 1)
  }

      
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center'> 
      <h1 className='text-2xl'>Random Word</h1>
      <h2 className='text-l'>with definition</h2>
      <main className='p-5 flex flex-col justify-center items-center'>
      <div>
        {definition}
      </div>
      <div className='flex flex-row'>
      {word?.split('').map((letter, index) => (
        <Box key={index} goodLetter={letter} index={index}/>
      ))}
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Next</button>
      </main>
    </div>
  )
}

export default Game
