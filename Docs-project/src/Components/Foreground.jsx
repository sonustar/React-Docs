import Cards from "./Cards"
import { FaRegFileAlt } from "react-icons/fa";
import React, { useRef, useEffect } from 'react';

function Foreground(){

  const ref = useRef(null)


  const arr =[
   {
      name : "Sonu",
      desc:"hii i study in Jadavpur University , Persuing : B.tech .",
      size:"50MB",
      value:true,
      tag: {Isopen : true , Title : "Download" , Color: "green"}
   },
   {
    name : "Sonu",
    desc:"hii i study in Jadavpur University , Persuing : B.tech .",
    size:"50MB",
    value:true,
    tag: {Isopen : true , Title : "Download" , Color: "blue"}
 },
 {
  name : "Sonu",
  desc:"hii i study in Jadavpur University , Persuing : B.tech .",
  size:"50MB",
  value:true,
  tag: {Isopen : true , Title : "Uploading" , Color: "green"}
},
   
  ];


  return (
    
    <div ref = {ref}  className='fixed top-0 left-0 z-[3] h-full w-full flex gap-3 flex-wrap'>

    {/* // use map  */}
    {arr.map((item)=>(
    <Cards x={item}  y={ref} />   
      
    ))}


    </div>

  );


}

export default Foreground;