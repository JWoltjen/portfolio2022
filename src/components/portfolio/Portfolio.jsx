import "./Portfolio.scss"
import {useEffect, useState} from 'react'
import PortfolioList from "../portfolioList/PortfolioList";

function Portfolio() {
    const [selected, setSelected] = useState("featured")
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
        }, 
       
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
              {list.map(item => (
                  <PortfolioList 
                        title={item.title} 
                        key={item.id} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                />
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
