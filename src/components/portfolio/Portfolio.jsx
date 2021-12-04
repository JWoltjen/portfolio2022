import "./Portfolio.scss"

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Night at the Movies</li>
                <li>Neumann</li>
                <li>Quiz App</li>
                <li>Image Finder</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="./assets/application.png" alt=""/>
                    <h3>Night at the Movies</h3>
                </div>
                <div className="item">
                    <img src="./assets/application.png" alt=""/>
                    <h3>Neumann</h3>
                </div>
                <div className="item">
                    <img src="./assets/application.png" alt=""/>
                    <h3>Quiz App</h3>
                </div>
                <div className="item">
                    <img src="./assets/application.png" alt=""/>
                    <h3>Image Finder</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
