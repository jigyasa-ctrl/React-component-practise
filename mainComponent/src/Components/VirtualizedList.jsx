import React, {useEffect, useState, startTransition, useRef} from 'react'

export default function VirtualisedList() {
    const isrendered= useRef(false)
    const [list, setList] = useState([])
    // function splittask(){
       

    // }
     function  fetchData() {
        fetch("https://dummyjson.com/products?limit=10000&skip=0").then(data => data.json()).then((res) => {
            let products = res.products
            for (let i=0; i<=products.length-1;i+= 50){
                let sliceTill10 = products.slice(i, i+50)
                setTimeout(() =>{
                    setList(prev => [...prev, ...sliceTill10])
                }, 100)                
            }
        })

    }

    useEffect(() =>{
         if(isrendered.current) return
         if(!isrendered.current){
            isrendered.current = true
            fetchData()
           

         }
    }, [])
    return <div>
        {/* {JSON.stringify(list)} */}
        {list.map((d) => (
        <p key={d.id}>{d.title}</p>
    ))
        }</div>
}