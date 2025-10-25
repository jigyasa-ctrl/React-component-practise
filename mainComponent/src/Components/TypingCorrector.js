import React, { useEffect, useState } from 'react'
export default function TypingCorrector(){
    const [newText, setNewText] = useState("")
    const text = "The sun had just begun to dip below the horizon, painting the sky in shades of orange and violet. A soft breeze rustled through the trees, carrying the faint scent of rain and earth. Somewhere in the distance, a train horn echoed, long, low, and almost nostalgic. It was one of those evenings that felt like a pause between two chapters quiet, reflective, and full of unspoken stories waiting to unfold."
   const defaultCSS = 'defaultcss'
   const [newCss, setNewCss] = useState({})
   const[leftText, setleftText] = useState("")
    useEffect(() =>
        {
            const textLength = newText.length
            const leftText = text.slice(textLength, text.length)
            console.log(newText, textLength, leftText)
            if(!text.includes(newText)){
                if(leftText.length !== text.length){
                    setleftText(leftText)
    
                }
            }
    }, [newText])

    return <div>
        <p className={defaultCSS} data-text={newText} data-after={leftText} style={{ '--caret-x': `${newText.length * 15}px` }}>{text}</p>
        <textarea style={{
            width: "30%",
            marginTop: "20px",
        }}  rows={5} value={newText} onChange={(e) => setNewText(e.target.value)}/>
    </div>
}