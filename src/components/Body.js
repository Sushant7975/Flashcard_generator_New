import React from "react"
import { Link } from "react-router-dom";
 

 
const Body = ()=>{
     
    return(
        
        <div className=" mt-1    ">
            <div className="w-9/12  m-auto border-b-2 border-gray-400  ">
                <ul className="flex  font-bold mb-1 text-lg ">
                     <li className="pr-5 mt-7"><Link to={"/"}>Create New</Link></li>
                     <li className=" mt-7"><Link to={"/MyFlashCards"}>MyFlash Cards</Link></li>
                </ul>
            </div>
          
     
      </div>
  
    )
}
export default Body;