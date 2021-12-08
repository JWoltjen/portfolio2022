import "./Testimonials.scss"

function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Fake Person",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Jeff is smart.",
        },
        {
          id: 2,
          name: "Fake Person",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Jeff works well in small groups.",
          featured: true,
        },
        {
          id: 3,
          name: "Fake Person",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Jeff is a hard worker who likes to learn new things.",
        },
      ];
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(item => ( 
                   <div className={item.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img 
                                src="assets/right-arrow.png" 
                                className="left" 
                                alt=""
                            />
                            <img 
                                src={item.img}
                                className="user" 
                                alt=""
                            />
                            <img 
                                src={item.icon} 
                                className="right" 
                                alt=""
                            />
                        </div>
                        <div className="center">
                            {item.desc}
                        </div>
                        <div className="bottom">
                            <h3>{item.name}</h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>  
                ))}
               
            </div>
        </div>
    )
}

export default Testimonials
