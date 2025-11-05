import React, { useState } from "react";
function BgChanger() 
{
   const [color, setColor] = useState("yellow")


    return (
      <body className="  items-baseline h-screen" style={{backgroundColor: color}}>
       

        <div className="buttondiv space-x-1 bg-teal-400 m-2 p-2 rounded-lg flex " >
            <p1>Click on Button to change color</p1>
            <button  onClick={()=>setColor('red')} style={{backgroundColor:'red', color:'white'}}>Red</button>
            <button onClick={()=>setColor('green')}style={{backgroundColor:'green',color:'white'}}>Green</button>
            <button onClick={()=> setColor('blue')}style={{backgroundColor:'blue',color:'white'}}>Blue</button>
        </div>
        
      </body>  
    );
}

export default BgChanger;