import './App.css'
import {Routes, Route} from "react-router-dom"
import Goods from './components/Goods'
import Bag from './components/Bag'
import Header from './components/Header'


function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Goods/>}/>
        <Route path='/bag' element={<Bag/>}/>
      </Routes>
    </>
  )
}

export default App
