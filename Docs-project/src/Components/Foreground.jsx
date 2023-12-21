import Cards from "./Cards"
import { FaRegFileAlt } from "react-icons/fa";

function Foreground(){

  const arr =[
   {
      name : "Sonu",
      desc:"hii i study in Jadavpur University , Persuing : B.tech .",
      size:"50MB",
      value:false,
   } 
   
  ];


  return (
    
    <div className='fixed top-0 left-0 z-[3] h-full w-full'>

    // use map 
    {arr.map((item)=>(
    <Cards x={item} />   
      
    ))}

    </div>

  );


}

export default Foreground;