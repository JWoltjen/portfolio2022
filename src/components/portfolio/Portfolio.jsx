import "./Portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";

function Portfolio() {
    const list = [
        {
            id: "featured", 
            title: "Featured", 
        }, 
        {
            id: "nightAtTheMovies", 
            title: "Night at the Movies", 
        }, 
        {
            id: "neumann", 
            title: "Neumann", 
        }, 
        {
            id: "quizApp", 
            title: "Quiz App", 
        }, 
        {
            id: "catter", 
            title: "Catter"
        }
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
              {list.map(item => (
                  <PortfolioList/>
              ))}  
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
