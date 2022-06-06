import { getData } from '../services/getProducts'
import Products from './Products'

const ButtonLoadMore = () => {
  const { listProducts, loading, error, nextItems } = getData()
  if (loading) return <p>...loading</p>
  if (error) return <p>{error}</p>
  return (
    <>
      <button>More characters...</button>
    </>
  )
}

export default ButtonLoadMore
