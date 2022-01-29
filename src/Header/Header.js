import { NavLink,Link} from "react-router-dom"
import "./Header.css"
 import Hz from '../Components/Hz'
import { useState } from "react"

function Header(){
    const [active,setActive]=useState(true)
    const hambutton=()=>{
        setActive(!active)
    };
    return(
        <>
        <Link style={{"textDecoration":"none","color":"#000000"}} to="/">
        <div className="title">
            <div className="titlecontainer">
            <span className="the">The</span>
            <span className="siren">Siren</span>
            </div>
            <div className="hamburger">
                <div className="fafahamburger">
               <button className="hambutton" onClick={hambutton}><i class="fa fa-bars "  style={{"fontSize":"30px"}}></i> </button>
                </div>
            </div>
       
       </div>
       </Link>
      
        <div className={active?"hamnavstyle":"navContainer"} >
        <div className="navstyle">
       <NavLink className={({ isActive }) => isActive ? "activenavitem" : "navitem"} to="/" >Home</NavLink>
       <NavLink className={({ isActive }) => isActive ? "activenavitem" : "navitem"} to="/bollywood" >Bollywood</NavLink>
       <NavLink className={({ isActive }) => isActive ? "activenavitem" : "navitem"} to="/technology">Technology</NavLink>
       <NavLink className={({ isActive }) => isActive ? "activenavitem" : "navitem"} to="/hollywood">Hollywood</NavLink>
       <NavLink className={({ isActive }) => isActive ? "activenavitem" : "navitem"} to="/sports">Sports</NavLink>
       <NavLink className={({ isActive }) => isActive ? "activenavitem" : "navitem"} to="/food">Food</NavLink>
       </div>
       <hr className="headerHr"/>
       </div>
       </>
    )
}
export default Header