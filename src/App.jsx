import './App.css'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
