import "./Works.scss"

function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="a picture of a mobile icon"/>
                                </div>
                                <h2>Title</h2>
                                <p>Dolor cillum Lorem laboris adipisicing non minim adipisicing est. Incididunt occaecat tempor elit deserunt elit dolor laborum dolore labore est sint. </p>
                                <span>Projects</span>
                            </div>
                        </div>

                        <div className="right">
                            <img src="assets/neumann.jpg" alt="a marble bust of Marcus Aurelius"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
