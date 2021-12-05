import "./Portfolio.scss"
import {useEffect, useState} from 'react'
import PortfolioList from "../portfolioList/PortfolioList";
import {nightAtTheMovies,
        quizApp, 
    catter,
    neumann} from '../../data'; 

function Portfolio() {
    const [selected, setSelected] = useState("neumann")
    const [data, setData] = useState([])
    const list = [
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

    useEffect(() => {
        switch(selected){
                case "nightAtTheMovies":
                setData(nightAtTheMovies); 
                break;
                case "neumann":
                setData(neumann); 
                break;
                case "quizApp":
                setData(quizApp); 
                break;
                case "catter":
                setData(catter); 
                break;
                default:
                    setData(nightAtTheMovies)
        }

    }, [selected])
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
                {data.map(project => (
                    <div className="item">
                        <h1>{project.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
