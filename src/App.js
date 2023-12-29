import './App.css'
import Nav from './Component/Navbar/Nav'
import Thirdpage from './Component/Thirdpage/Thirdpage'
import Home from './Component/Home/Home'
import About from './Component/About/About'

const App = () => {
  return (
    <>
  
    <div className='app'>
    <div className='inside'>
    <Nav/>
    <Home/>
    <Thirdpage/>

    </div>
   <About/>
    </div>
    </>
  )
      
}

export default App