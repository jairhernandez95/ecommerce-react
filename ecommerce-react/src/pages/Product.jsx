import { Link, useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Product = () => {
  const { character = '' } = useParams()
  const { listProducts, loading, error } = useGetData(character)
  console.log(listProducts)
  if (error) return <p>Error</p>
  if (loading) return <p>...Loading</p>

  return (
    <section>
      <p>Product</p>
      <p>{listProducts.name}</p>
      <Link to='/'>Home</Link>
    </section>
  )
}

export default Product
