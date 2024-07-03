import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to="contacts">CONTACTS</Link>
      <Link to="about">ABOUT</Link>

      <Outlet/>
    </>
  )
}

export default App
