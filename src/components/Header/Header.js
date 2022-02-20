import Nav from "../Nav/Nav";
import {  images } from "./sliderData";
import Slider from "../slider/SliderComponent";




import './header.css';


function Header() {


    
    return (  
        <div className =  "header-container">
            
         
            <Nav/>
          <Slider/>
          
            </div>
           
            

           
 
    );
}

export default Header;