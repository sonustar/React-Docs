
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
function Cards({x}){

return (
    <div className=" relative w-60 h-80 rounded-[30px] bg-zinc-600 px-5 py-10 text-white overflow-hidden ">
    <FaRegFileAlt/>
   <p className="text-sm leading-tight font-semibold  mt-5 ">{x.desc}{x.name} </p>   
      <div className=" footer absolute bottom   w-full h-10 left-0"> 
        
          
          <div className="flex items-center justify-between ml-4 mr-5 mb-10  py-5 ">
                <h5> </h5>
                <span className="w-6  h-4 bg-zinc-600 rounded-full flex items-center justify center">
                {x.value ?  <FaArrowAltCircleDown   size={".9em"} color='#fff'/> : <GiCrossMark />  }
                </span>
         </div>
         
         <div className="tag bg-green-600 h-10 w-full bottom text-white"> 

          <h3 className=" flex justify-center bottom-0 p-3">Download</h3>
         
         </div>
    
       </div>
    
     </div>
);

}

export default Cards;