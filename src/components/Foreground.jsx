import React from 'react'
import Card from './Card'
import { useRef } from "react";


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Hii This is Mayank's Docs",
            size: "2.3MB",
            close: false,
            tag:{
                tagcol: "green",
                isOpen: true

            }
            

        }]
  return (
    <div ref={ref} className=" fixed inset-0 z-30 w-screen h-screen bg-sky-800/10 gap-10 px-10 py-20 flex flex-wrap overflow-auto">
      {data.map((item, index) => (
        <Card reference={ref} data={item} />
        
      ))}
      {data.map((item, index) => (
        <Card reference={ref} data={item} />
        
      ))}
      {data.map((item, index) => (
        <Card reference={ref} data={item} />
        
      ))}

      {data.map((item, index) => (
        <Card reference={ref} data={item} />
        
      ))}
      
    </div>
  )
}

export default Foreground