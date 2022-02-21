import Buttons from "../buttons/Buttons";
import {Link} from 'react-router-dom'

import './nav.css'


function Nav() {

   const handleLoginButton  = (e) => {
       console.log("Work")
   };
    return ( 
       <nav className = "nav-container">
          <ul className= "ul-container">

          <Link to="/">
             <div  className="logo">
              <div className ="square">
                  <p className="inicial"> d/k</p>
             </div>
                <p className="logoName"> Raw Studio</p>
              
             
            </div> </Link>
      
           <li><Link to= "/aa" >Produkty</Link></li>
           <li><a href="siam">Galeria</a></li>
           <li><a href="siam">Kontakt</a></li>
        
        <div className = "button-container">
        <Buttons text = "Log in"  click = {handleLoginButton}/>
        <Buttons text = "Sign UP"/>
        </div>
        </ul>
        </nav>
        
     );
}

export default Nav;