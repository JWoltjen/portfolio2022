import "./Testimonials.scss"

function Testimonials() {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt=""/>
                        <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="user" alt=""/>
                        <img src="assets/youtube.png" className="right" alt=""/>
                    </div>
                    <div className="center">
                        Deserunt voluptate adipisicing fugiat incididunt mollit cillum reprehenderit in anim magna. 
                    </div>
                    <div className="bottom">
                        <h3>Jason</h3>
                        <h4>Brother</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
