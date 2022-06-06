import useGetData from '../hooks/useGetDataOfProducts'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const Products = () => {
  const { query } = useAppContext
  const { listProducts, loading, error } = useGetData(query)
  if (error) return <p>{error}</p>
  if (loading) return <p>...loading</p>
  return (
    <section className='row py-5 gy-4'>
      {listProducts.map((item, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3 card align-items-stretch'>
          <Link to={`/product/${item.id}`} className='col-sm'>
            <article>
              <img src={item.image} alt={item.name} className='card-img-top' />
              <div className='card-body'>
                <p className='card-title d-flex justify-content-center'>{item.name}</p>
              </div>
            </article>
          </Link>
          <div className='card border-0' style={{ outline: 'none' }}>
            <div className='card-body d-flex justify-content-between'>
              <button type='button' className='btn btn-warning'>Edit</button>
              <button type='button' className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Products
