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


  const handleSumbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key)
    if(event.key === 'Backspace'){
      setLetters(letters.slice(0, -1))
      setColors(colors.slice(0, -1))
    }else if(event.key.length === 1){
      setLetters([...letters, event.key])
    }else if (event.key === 'Enter'){
      setLetters([])
      setColors([])
    }
  }
  if (!word) return <div>Loading...</div>

      
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center h-screen w-screen' onKeyDown={keyDown} tabIndex={-1}> 
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
