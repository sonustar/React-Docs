import React from 'react'
import Background from "./Components/Background";   // c1
import Foreground from './Components/Foreground';   // c2


function App (){

  return (
    <>
    <div className = ' relative w-full h-screen bg-zinc-800'>
    
    <Background/>    
    <Foreground/>     
    </div>
    
     
    </>
  );
}

export default App ;