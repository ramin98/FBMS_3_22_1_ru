import { createContext } from 'react'
import './App.css'
import { reducer, initialState } from './reducer'
import { useReducer } from 'react'
import { Route, Routes, useNavigation } from 'react-router-dom'
import NotFound from './components/NotFound'
import Mains from './components/Mains'
import GoodsList from "./components/GoodsList"
import BagList from "./components/BagList"
import GoodsPage from "./components/GoodsPage"
import Goods from "./components/Goods"
import OtherGoods from "./components/OtherGoods"
import Contacts from "./components/Contacts"
import About from "./components/About"

export const MyContext = createContext()

function App() {
  let [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/' element={<Mains />}>
          <Route path="/goods" element={<GoodsList />}>
            <Route path="main-goods" element={<Goods />} />
            <Route path="other-goods" element={<OtherGoods />}>
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Route>
          <Route path="/bag" element={<BagList />} />
          <Route path="/goods/main-goods/goods-item/:goodsId" element={<GoodsPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </MyContext.Provider>
  )
}

export default App
