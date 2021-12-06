import "./Works.scss"

function Works() {

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
        id: "quizApp", 
        title: "Quiz App", 
        img: "tbd", 
        desc: "tbd", 
        tech: ["tbd", "tbd", 'tbd']
    },
    {
        id: "catter", 
        title: "Catter",
        img: "tbd", 
        desc: "tbd", 
        tech: ["tbd", "tbd", 'tbd']
    }
   ]

    return (
        <div className="works" id="works">
            <div className="slider">
                {data.map(item => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="a picture of a mobile icon"/>
                                </div>
                                <h2>{item.title}</h2>
                                <p>Dolor cillum Lorem laboris adipisicing non minim adipisicing est. Incididunt occaecat tempor elit deserunt elit dolor laborum dolore labore est sint. </p>
                                <span>Projects</span>
                            </div>
                        </div>

                        <div className="right">
                            <img src={item.img} alt=""/>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="left arrow icon"/>
            <img src="assets/arrow.png" className="arrow right" alt="right arrow icon"/>
        </div>
    )
}

export default Works
