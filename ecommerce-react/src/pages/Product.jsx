import { Link } from 'react-router-dom'
import useGetData from '../hooks/useGetDataOfProduct'

const Product = () => {
  const { listProducts, loading, error } = useGetData(((window.location.href.slice(window.location.href.length - 2)).match((/(\d+)/)))[0].toString())
  console.log(((window.location.href.slice(window.location.href.length - 2)).match((/(\d+)/)))[0].toString())
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
      <img src={listProducts.image} />
      <p>Name: {listProducts.name}</p>
      <p>Specie: {listProducts.species}</p>
      <p>Gender: {listProducts.gender}</p>
      <p>Status: {listProducts.status}</p>
      <p>Location: {listProducts.location.name}</p>
      <div>
        <p>Episodes:</p>
        <div>
          {/* {listProducts.map(item, key)} */}
        </div>
      </div>
      <button type='button' className='btn btn-warning'>
        <Link to='/'>Home</Link>
      </button>
    </section>
  )
}

export default Product
