import "./Works.scss"
import {useState} from 'react' 


function Works() {
   const [currentSlide, setCurrentSlide] = useState(0); 
   const data = [
    {
        id: "nightAtTheMovies", 
        title: "Night at the Movies", 
        img: "assets/movies.jpg", 
        desc: "tbd", 
        tech: ["tbd", "tbd", 'tbd']
    },
    {
        id: "neumann", 
        title: "Neumann", 
        img: "assets/neumann.jpg", 
        desc: "tbd", 
        tech: ["tbd", "tbd", 'tbd']
    },
    {
        id: "catter", 
        title: "Catter",
        img: "assets/cat.png", 
        desc: "tbd", 
        tech: ["tbd", "tbd", 'tbd']
    }
   ]

   const handleClick = (direction) => {
     direction === 'left' 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
   }


    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(item => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="a picture of a mobile icon"/>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc} </p>
                            </div>
                        </div>

                        <div className="right">
                            <img src={item.img} alt=""/>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="left arrow icon" onClick={()=>handleClick('left')}/>
            <img src="assets/arrow.png" className="arrow right" alt="right arrow icon" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
