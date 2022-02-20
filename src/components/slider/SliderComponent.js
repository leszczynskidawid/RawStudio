import {useEffect, useState} from'react'; 
import { images } from "../Header/sliderData";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import './slider.css'
import Buttons from "../buttons/Buttons";







function SliderComponent() {
    const [currenSlide, setCurrentSlide] = useState(0); 
    const autoPlay = 4000; 


    useEffect(()=>{
      const newIndexValue = currenSlide >= images.length -1 ? 0 : currenSlide +1
      const timer = setTimeout(()=>setCurrentSlide(newIndexValue) ,autoPlay)
      return  () => clearTimeout(timer)
    }, [currenSlide])

    const handleNextSlide  = () => {
     

     setCurrentSlide(currenSlide === images.length-1 ? 0 :  currenSlide + 1)
    
       
    };
    const handleprevSlide  = (e) => {
      setCurrentSlide(currenSlide === 0 ? images.length-1  :  currenSlide - 1)
    };
    const handleButtonWatchMore  = (e) => {
       console.log("work")
    };
    

  
    return ( 
     <>
 
            <div className ="img-container">
              {images.map((image,index) =>  (<div /*className ="slide"*/ className={index=== currenSlide ? "slide current" : "slide"} key={index} style ={{backgroundImage :`url(${image.image})`, 
             marginLeft:index === 0 ?  `-${currenSlide * 100}%` : undefined }}> 
             
             <div className="content" style={{backgroundColor:`${image.color}`}}>
               <h1>{image.title}</h1>
               <p>{image.description}</p>
               <Buttons text= "watch more" click ={handleButtonWatchMore}/>
             </div>
             
             </div>))}
             <AiOutlineArrowLeft className ="arrow prev" onClick={handleprevSlide}/>
             <AiOutlineArrowRight className ="arrow next" onClick={handleNextSlide}/>
          
            </div>

      




          
     </>
       
        
     );
  
}



export default SliderComponent;