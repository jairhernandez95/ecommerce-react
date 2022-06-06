import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/SearchBar'
import { ContextProvider } from './context'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
)
