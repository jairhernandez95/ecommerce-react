import Products from '../components/Products'
import ButtonLoadMore from '../components/ButtonLoadMore'
import '../styles/App.css'

function App () {
  return (
    <>
      <div className='App container'>
        <Products />
        <ButtonLoadMore />
      </div>
    </>
  )
}

export default App
