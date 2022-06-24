import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const NavBar = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { handleFilterProducts } = useAppContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimValue = searchRef.current.value.trim()
    if (trimValue !== '') {
      handleFilterProducts(trimValue)
      navigate('/products/search', { replace: true })
      event.target.reset()
    }
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'><img className='imageLogo' src='../src/assets/favicon.png' alt='' /></a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#mainNavBar' aria-controls='mainNavBar' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='mainNavBar'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/products'><img src='../src/assets/home.png' className='imageLogo' alt='' /></Link>
            </li>
          </ul>
          <form className='d-flex' onSubmit={handleSubmit}>
            <input ref={searchRef} className='form-control me-2' type='search' placeholder='Search product' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>🔍</button>
          </form>
          <img src='../src/assets/carrito.png' className='imageLogo' alt='' />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
