import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher.jsx'

const Products = () => {
  const { setProducts } = useAppContext()

  const {
    data: products,
    error
  } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')

  if (error) return <p>{error.message}</p>

  useEffect(() => {
    setProducts(products)
  }, [])

  return (
    <section className='row gy-4'>
      {products.map((product, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`product/${product._id}`}>
            <article className='card'>
              <img loading='lazy' className='card-img-top' src={product.image} alt={product.product_name} />
              <div className='card-body'>
                <p className='card-title'>{product.product_name}</p>
                <p>${product.price}.00</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Products

// import useGetData from '../hooks/useGetDataOfAllProducts'
// import { Link } from 'react-router-dom'
// import useAppContext from '../hooks/useAppContext'

// const Products = () => {
//   const { query } = useAppContext
//   const { listProducts, loading, error } = useGetData(query)
//   if (error) return <p>{error}</p>
//   if (loading) return <p>...loading</p>
//   return (
//     <section className='row py-5 gy-4'>
//       {listProducts.map((product, key) => (
//         <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3 card align-products-stretch'>
//           <Link to={`/product/${product._id}`} className='col-sm'>
//             <article>
//               <img src={product.image} alt={product.product_name} className='card-img-top img-fluid' />
//               <div className='card-body'>
//                 <p className='card-title d-flex justify-content-center'>{product.product_name}</p>
//                 <p>Price: {product.price}</p>
//                 <p>Brand: {product.brand}</p>
//               </div>
//             </article>
//           </Link>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default Products
