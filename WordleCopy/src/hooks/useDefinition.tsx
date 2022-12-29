import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const useDefinition = (word: string | null) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async (): Promise<void> => {
    try {
      if (word !== null) {
        const response = await axios.get(`/${word}`)
        setData(response.data)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Axios Error with Message: ' + error.message)
      } else {
        setError(error)
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
