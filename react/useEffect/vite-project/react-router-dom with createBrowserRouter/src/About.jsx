import { Outlet, Link } from "react-router-dom"

function About() {

    return (
        <div>
         <h1>About</h1>
         <Link to="about-1">CONTACTS</Link>
         <Link to="about-2">ABOUT</Link>
         <Outlet/>
        </div>
       
     
    )
  }
  
  export default About
  