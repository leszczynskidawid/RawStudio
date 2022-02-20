import Buttons from "../buttons/Buttons";



import './nav.css'


function Nav() {

   const handleLoginButton  = (e) => {
       console.log("Work")
   };
    return ( 
       <nav className = "nav-container">
    
        <ul className= "ul-container">
        <div  className="logo">
           {/* <a href="sasd" className="logo"><img src={logo} alt="logo" /></a> */}
           <div className ="square">
         <p className="inicial"> d/k</p>
           </div>
           <p className="logoName"> 
              Raw Studio
           </p>
           
      </div>
      
           <li><a href="siam">Produkty</a></li>
           <li><a href="siam">Galeria</a></li>
           <li><a href="siam">O Mnie</a></li>
        
        <div className = "button-container">
        <Buttons text = "Log in"  click = {handleLoginButton}/>
        <Buttons text = "Sign UP"/>
        </div>
        </ul>
        </nav>
        
     );
}

export default Nav;