import "./Intro.scss"

function Intro() {
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
                    <h3>Freelance<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="a downward directional arrow"/>
                </a>
           </div>
        </div>
    )
}

export default Intro
