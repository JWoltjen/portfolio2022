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
                    <img src="./assets/portfolio.png" alt=""/>
                    <h2>What</h2>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
