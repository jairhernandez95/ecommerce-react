import { getData } from '../services/services'
import { useEffect, useState } from 'react'

const useGetData = (name = '') => {
  const [listProducts, setListProducts] = useState(name ? {} : [])
  const [nextProducts, setNextProducts] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data } = await getData(name)
        setListProducts(data.results)
        setNextProducts(data)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])

  return { listProducts, loading, error, nextProducts }
}

export default useGetData
