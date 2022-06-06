import useGetData from '../hooks/useGetDataOfProducts'
import { Link } from 'react-router-dom'

const Products = () => {
  const { listProducts, loading, error } = useGetData()
  if (error) return <p>{error}</p>
  if (loading) return <p>...loading</p>
  return (
    <section className='row py-5 gy-4'>
      {listProducts.map((item, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3 '>
          <Link to={`/product/${item.id}`} className='col-sm card'>
            <article>
              <img src={item.image} alt={item.name} className='card-img-top' />
              <div className='card-body'>
                <p className='card-title'>{item.name}</p>
                <div className='d-flex justify-content-between'>
                  <button type='button' className='btn btn-warning'>Edit</button>
                  <button type='button' className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Products
