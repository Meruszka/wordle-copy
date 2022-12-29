import { useState, useEffect } from 'react'
import axios from 'axios'
import { WordData } from '../types/word/main'

axios.defaults.baseURL = 'https://random-word-api.herokuapp.com/word'

export const useWord = () => {
  const [data, setData] = useState<WordData>()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get('')
      setData(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Axios Error with Message: ' + error.message)
      } else if (error instanceof Error) {
        setError('Error with Message: ' + error.message)
      }
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [data, error, loading] as const
}
