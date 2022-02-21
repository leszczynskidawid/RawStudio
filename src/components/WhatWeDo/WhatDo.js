import "./whatDo.css"
import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";


import { images } from "../Header/sliderData";
import ReactPhotoCollageContainer from "react-photo-collage/dist/react-photo-collage/react-photo-collage-container";


function WhatDo() {
  

  const setting = {
    width:"600px", 
    height:["250px" , "170px"], 
    layout:[1,4],
    photos:[
      {
        source:
        "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
      },
      {
        source:
        "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
      },
      {
        source:
        "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
      },

    ],
    showNumOfRemainingPhotos:true,
  }

  


  




   
    return ( 
      
      <div className = "categoriesContainer">
      
      <h1>czym się zajmujemy ?? </h1>
      <p>Cześć, stworzyliśmy GrowRaw z potrzeby posiadania minimalistycznych doniczek dla naszych roślin. I choć brzmi to mało oryginalnie, tak właśnie było ;) Rozwijamy GrowRaw ponieważ chcemy żyć w bardziej elastycznym schemacie niż etat. Nasze produkty są dziełem naszych rąk. Działamy z dbałością o każdy detal. Przetestowaliśmy wiele rozwiązań i materiałów - jesteśmy samoukami. Efekt i jakość, którą uzyskaliśmy jest wynikiem wielu prób i zdobytego przez nas doświadczenia.
          Choć nie mamy sklepu stacjonarnego możesz  znaleźć w nasze produkty lokalnie w  kilku fajnych miejscach w Polsce. Mieszkamy w Warszawie.
          , że wybierając nasze produkty wspierasz nasz rodzinny biznes! 
            #growraw #supportthemakers #shoplocal #buythingsfromrealpeople  #handcrafted #concretepots </p>
      

      <ReactPhotoCollage setting = {setting}/>


      
      </div>
      
       
         
    
);
    }
export default WhatDo;