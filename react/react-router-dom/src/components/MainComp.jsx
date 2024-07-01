import { Route, Routes } from "react-router-dom"
import GoodsList from "./GoodsList"
import BagList from "./BagList"
import GoodsPage from "./GoodsPage"

function MainComp() {

    return (
      <main>
        <Routes>
          <Route path="/goods/*" element={<GoodsList/>}/>
          <Route path="/bag" element={<BagList/>}/>
          <Route path="/goods/main-goods/goods-item/:goodsId" element={<GoodsPage/>}/>
        </Routes>
      </main>
    )
  }
  
  export default MainComp