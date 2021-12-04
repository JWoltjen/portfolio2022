import "./Intro.scss"
import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

function Intro() {
    const textRef = useRef(); 

    useEffect(() => {
        init(textRef.current, {
            showCursor: false, 
            strings: ["Developer", "Creator", "Digital Explorer", "Problem Solver"]
        })
    }, [])

    return (
        <div className='intro' id='intro'>
           <div className="left">
               <div className="imgContainer">
                   <img src="assets/cat.png" alt="a photo of jeff"/>
               </div>
           </div>
           <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Jeff Woltjen</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="a downward directional arrow"/>
                </a>
           </div>
        </div>
    )
}

export default Intro
