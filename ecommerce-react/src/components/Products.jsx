import useGetData from '../hooks/useGetData'
import { Link } from 'react-router-dom'

const Products = () => {
  const { listProducts, loading, error } = useGetData()
  if (error) return <p>{error}</p>
  if (loading) return <p>...loading</p>
  return (
    <section>
      {listProducts.map((item, key) => (
        <div key={key}>
          <Link to={`/product/${item.name}`}>
            <article>
              <div>
                <p>{item.name}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Products
