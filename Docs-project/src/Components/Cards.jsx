import React, { useRef, useEffect } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { motion } from "framer-motion"


function Cards({x,y}){

return (
    <motion.div drag dragConstraints={y} whileHover={{ scale: 1.1 }} whileDrag={{ scale: 1.2 }} className=" relative flex-shrink-0  w-60 h-80 rounded-[30px] bg-zinc-600 px-5 py-10 mt-5 ml-3 text-white overflow-hidden ">
    <FaRegFileAlt/>
   <p className="text-sm leading-tight font-semibold  mt-5 ">{x.desc}{x.name} </p>   
      <div className=" footer absolute bottom   w-full h-10 left-0"> 
        
          
          <div className="flex items-center justify-between ml-4 mr-5 mb-10  py-11 ">
                <h5>{x.size} </h5>
                <span className="w-6  h-4 bg-zinc-600 rounded-full flex items-center justify center">
                {x.value ?  <FaArrowAltCircleDown   size={".9em"} color='#fff'/> : <GiCrossMark />  }
                </span>
         </div>

            { x.tag.Isopen ? (<div className={`tag ${x.tag.Color === "green" ? "bg-green-600" : "bg-blue-600" } h-10 w-full  text-white`}> 

<h3 className=" flex justify-center bottom-0 p-3">{x.tag.Title}</h3>

</div>): null } 
    
  {/* or if you want to avoid NULL ; you can do it as :

    { x.tag.Isopen  && (<div className="tag bg-green-600 h-10 w-full bottom text-white"> 

<h3 className=" flex justify-center bottom-0 p-3">Download</h3>

</div>) }  */}



       </div>
    
     </motion.div>
);

}

export default Cards;