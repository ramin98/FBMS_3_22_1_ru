import {Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <ul>
            <li><Link to="/">GOODS</Link></li>
            <li><Link to="/bag">BAG</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
