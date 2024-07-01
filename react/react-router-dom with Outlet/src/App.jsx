import { createContext } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainComp from './components/MainComp'
import { reducer, initialState } from './reducer'
import { useReducer } from 'react'

export const MyContext = createContext()

function App() {
  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MyContext.Provider value={{state, dispatch}}>
      <Header/>
      <MainComp/>
      <Footer/>
    </MyContext.Provider>
  )
}

export default App
