import { getData } from '../services/services'
import { useEffect, useState } from 'react'

const useGetData = (name = '') => {
  const [listProducts, setListProducts] = useState(name ? {} : [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: products } = await getData(name)
        setListProducts(name ? products[0] : products)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])

  return { listProducts, loading, error }
}

export default useGetData
