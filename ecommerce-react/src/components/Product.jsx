import { Link } from 'react-router-dom'
import useGetDataOfProduct from '../hooks/useGetDataOfProduct'

const Product = () => {
  const { listProducts, loading, error } = useGetDataOfProduct(window.location.href.slice(30))
  if (error) return <p>Error</p>
  if (loading) {
    return (
      <section className='container py-5'>
        <p>...Loading</p>
      </section>
    )
  }

  return (
    <section className='container py-5'>
      <img src={listProducts.image} className='img-thumbnail' />
      <p>Name: {listProducts.product_name}</p>
      <button type='button' className='btn btn-primary'>Comprar</button>
      <button type='button' className='btn btn-warning'>
        <Link to='/'>Home</Link>
      </button>
    </section>
  )
}

export default Product
