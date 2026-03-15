import React from "react";
export default function Debounce() {
    const debounce = function(func, delay){
        let timer;
        return async function(...args){
            clearTimeout(timer);
            timer = setTimeout(() =>{
                func(...args    )
            }, delay)
        }
    }
    const handleChange = async function(value){
        console.log(value, Date.now());
    }
    const debounceFunction = debounce(handleChange, 500)

   
    return <div>
        <input type="text" onChange={(e) => debounceFunction(e.target.value)}/>
    </div>
}