import WhatDo from "../WhatWeDo/WhatDo";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

function Page() {
    return ( 
        <>
        <Routes>

        <Route path ="/" element = {<WhatDo/>} />
            
        </Routes>


   
         </>
     );
}

export default Page;