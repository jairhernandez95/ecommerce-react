import useGetData from '../hooks/useGetDataOfAllProducts'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const Products = () => {
  const { query } = useAppContext
  const { listProducts, loading, error } = useGetData(query)
  if (error) return <p>{error}</p>
  if (loading) return <p>...loading</p>
  return (
    <section className='row py-5 gy-4'>
      {listProducts.map((product, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3 card align-products-stretch'>
          <Link to={`/product/${product._id}`} className='col-sm'>
            <article>
              <img src={product.image} alt={product.product_name} className='card-img-top' />
              <div className='card-body'>
                <p className='card-title d-flex justify-content-center'>{product.product_name}</p>
                <p>Price: {product.price}</p>
                <p>Brand: {product.brand}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Products
