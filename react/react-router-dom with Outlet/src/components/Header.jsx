import { Link, NavLink, useNavigate } from "react-router-dom"
import BagGoods from "./BagGoods"

function Header() {
  let navigate = useNavigate()

    return (
      <header>
        <h1>HEADER</h1>
        <nav>
          <ul>
          <li><NavLink activeclassname='active' to='/goods'>GOODS</NavLink></li>
            <li><NavLink activeclassname='active' to='/bag'>BAG</NavLink></li>

          </ul>
        </nav>
        <BagGoods/>
      </header>
    )
  }
  
  export default Header