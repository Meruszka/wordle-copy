import { useEffect, useState } from 'react'
import {useWord} from '../hooks/useWord'
import Box from './Box'
import Definition from './Definition'

function Game() {
  const [word, setWord] = useState<string | null>(null)
  const [wordData , wordError, wordLoading] = useWord()
    
  useEffect(() => {
    if(wordData){
      setWord(wordData[0])
      setLetters(
        wordData[0].split('').map(() => {
          return ''
        })
      )
      setColors(
        wordData[0].split('').map(() => {
          return 'white'
        })
      )
      console.log(wordData)
    }
  }, [wordData])

  useEffect(() => {
    if(wordError){
      console.log(wordError)
    }
  }, [wordError])

  useEffect(() => {
    if(wordLoading){
      console.log(wordLoading)
    }
  }, [wordLoading])


  // Main game logic
  const [letters, setLetters] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [index, setIndex] = useState<number>(0)


  const handleSumbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Backspace'){
      let newLetters = [...letters]
      newLetters[index - 1] = ''
      setLetters(newLetters)

      let newColors = [...colors]
      newColors[index - 1] = 'white'
      setColors(newColors)

      setIndex(index - 1)

    }else if(event.key.length === 1){
      let newLetters = [...letters]
      newLetters[index] = event.key
      setLetters(newLetters)
      setIndex(index + 1)
    }else if (event.key === 'Enter'){
      setLetters([])
      setColors([])
    }
  }
  if (!word) return <div
  className='overflow-hidden flex flex-row justify-center items-center h-screen w-screen'
  >
    <div className="m-2 h-5 w-5 animate-spin rounded-full border-b-2 border-sky-300"></div>
    <span>Loading...</span>
    </div>

      
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center h-screen w-screen outline-none' onKeyDown={keyDown} tabIndex={-1}> 
      <h1 className='text-2xl'>Random Word</h1>
      <h2 className='text-l'>with definition</h2>
      <main className='p-5 flex flex-col justify-center items-center'>
      {/* <Definition word={word}/> */}
      <form className='flex flex-row' onSubmit={handleSumbmit}>
      {word?.split('').map((letter, index) => (
        <Box key={index} letter={letters[index]} color={colors[index]}/>
      ))}
      </form>
      </main>
    </div>
  )
}

export default Game
