import { Route, Routes } from "react-router-dom"
import GoodsList from "./GoodsList"
import BagList from "./BagList"
import GoodsPage from "./GoodsPage"
import Goods from "./Goods"
import OtherGoods from "./OtherGoods"
import Contacts from "./Contacts"
import About from "./About"

function MainComp() {

  return (
    <main>
      <Routes>
        <Route path="goods" element={<GoodsList />}>
          <Route path="main-goods" element={<Goods />} />
          <Route path="other-goods" element={<OtherGoods />}>
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Route>
        <Route path="/bag" element={<BagList />} />
        <Route path="/goods/main-goods/goods-item/:goodsId" element={<GoodsPage />} />
      </Routes>
    </main>
  )
}

export default MainComp