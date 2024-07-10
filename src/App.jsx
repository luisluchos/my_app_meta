import './App.css'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <img src={reactLogo} alt='logo' />
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default App
