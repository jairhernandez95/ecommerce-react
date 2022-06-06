import { Link } from 'react-router-dom'
import useGetData from '../hooks/useGetDataOfProduct'

const Product = () => {
  const { listProducts, loading, error } = useGetData(((window.location.href.slice(window.location.href.length - 2)).match((/(\d+)/)))[0].toString())
  console.log(((window.location.href.slice(window.location.href.length - 2)).match((/(\d+)/)))[0].toString())
  if (error) return <p>Error</p>
  if (loading) return <p>...Loading</p>

  return (
    <section className='container'>
      <p>Product</p>
      <p>{listProducts.name}</p>
      <img src={listProducts.image} />
      <Link to='/'>Home</Link>
    </section>
  )
}

export default Product
