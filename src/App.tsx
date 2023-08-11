import './App.css'
import MenuTopo from './components/MenuTopo'
import MenuMobile from './components/menuMobile/MenuMobile'
import Home from './pages/inicio/home'

function App() {
  return (
    <>
      <MenuMobile/>
     <Home/>
     <MenuTopo/>
    </>
  )
}

export default App
