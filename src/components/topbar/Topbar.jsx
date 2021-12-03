import "./Topbar.scss"
import {Person, Mail} from '@material-ui/icons'

function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">logo.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+913-944-6189</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/> 
                        <span>Jeff.Woltjen@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1">1</span>
                        <span className="line2">2</span>
                        <span className="line3">3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
