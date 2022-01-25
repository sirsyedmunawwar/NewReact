import { NavLink,Link} from "react-router-dom"
import "./Header.css"
 import Hz from '../Components/Hz'

function Header(){
    return(
        <>
        <Link style={{"textDecoration":"none","color":"#000000"}} to="/">
        <div className="title">
       <h3 className="the">The</h3>
        <h1 className="siren">Siren</h1>
       </div>
       </Link>
      
        <div style={{"width":"85vw"}}>
        <div className="navstyle">
       <NavLink className="navitem" to="/" >Home</NavLink>
       <NavLink className="navitem" to="/bollywood" >Bollywood</NavLink>
       <NavLink className="navitem" to="/technology">Technology</NavLink>
       <NavLink className="navitem" to="/hollywood">Hollywood</NavLink>
       <NavLink className="navitem" to="/fitness">Fitness</NavLink>
       <NavLink className="navitem" to="/food">Food</NavLink>
       </div>
       <Hz/>
       </div>
       
      
      
       </>
    )
}
export default Header