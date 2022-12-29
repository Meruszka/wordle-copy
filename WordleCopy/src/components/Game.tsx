import { useEffect, useState } from 'react'
import {useWord} from '../hooks/useWord'
import Box from './Box'

interface Letters {
  [key: number]: string[]
}

interface Colors {
  [key: number]: string[]
}

function Game() {
  const [word, setWord] = useState<string | null>(null)
  const [wordData , wordError, wordLoading] = useWord()
  const maxRounds = 5
  const RoundsArray = Array.from(Array(maxRounds).keys())
    
  useEffect(() => {
    if(wordData){
      setWord(wordData[0])
      for (let i = 0; i < maxRounds; i++) {
        setLetters((prev) => {
          return {
            ...prev,
            [i]: wordData[0].split('').map(() => {
              return ''
            })
          }
        })
        setColors((prev) => {
          return {
            ...prev,
            [i]: wordData[0].split('').map(() => {
              return 'white'
            })
          }
        })
      }
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
  const [letters, setLetters] = useState<Letters>([])
  const [colors, setColors] = useState<Colors>([])
  const [index, setIndex] = useState<number>(0)
  const [round, setRound] = useState<number>(0)
  const [win, setWin] = useState<boolean>(false)

  /* 
    Letters and colors
    letters = {
      runda: [],
      runda: [],
    }
    colors = {
      runda: [],
      runda: [],
    }
  */


  const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Backspace'){
      if (index === 0) return
      let everyLetter = letters
      let newLetters = [...letters[round]]
      newLetters[index - 1] = ''
      everyLetter[round] = newLetters
      setLetters(everyLetter)

      let everyColor = colors
      let newColors = [...colors[round]]
      newColors[index - 1] = 'white'
      everyColor[round] = newColors
      setColors(everyColor)

      setIndex(index - 1)

    }else if(event.key.length === 1){
      console.log(round, index, event.key, letters)
      let everyLetter = letters
      let newLetters = [...letters[round]]
      newLetters[index] = event.key
      everyLetter[round] = newLetters
      setLetters(everyLetter)
      setIndex(index + 1)
    }else if (event.key === 'Enter'){
      if (word){
        if (index < word?.length) return
      }
      // max rounds is 3, todo
      if(round === 2){
        checkWin()
      }else{
        // check letters and set colors
      setRound(round + 1)
      setIndex(0)
      }
    }
  }

  const checkWin = () => {
    if(letters[round].join('') === word){
      console.log('You Win!')
      setWin(true)
    }
  }
  // Loding screen
  if (!word) {
    return (
    <div className='overflow-hidden flex flex-row justify-center items-center h-screen w-screen'>
    <div className="m-2 h-5 w-5 animate-spin rounded-full border-b-2 border-sky-300"></div>
    <span>Loading...</span>
    </div>)
  }
  // Win screen
  if (win) {
    return (
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-2xl'>You Win!</h1>
        <button 
        className='bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded'
        onClick={() => window.location.reload()}>Play Again</button>
      </div>
    )
  }

      
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center h-screen w-screen outline-none' onKeyDown={keyDown} tabIndex={-1}> 
      <h1 className='text-2xl'>Random Word</h1>
      <h2 className='text-l'>with definition</h2>
      <main className='p-5 flex flex-col justify-center items-center'>
      {/* <Definition word={word}/> */}
      <div className='flex flex-col'>
      {RoundsArray.map((ele, Rindex) => {
        return (
          <div className='flex flex-row' key={Rindex}>
            {word?.split('').map((letter, index) => (
              <Box key={index} letter={letters[ele][index]} color={colors[ele][index]}/>
            ))}
          </div>
        )
      })}
      </div>
      </main>
    </div>
  )
}

export default Game
