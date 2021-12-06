import "./Works.scss"

function Works() {

    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Web Design",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

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
            <img src="assets/arrow.png" className="arrow left" alt="left arrow icon"/>
            <img src="assets/arrow.png" className="arrow right" alt="right arrow icon"/>
        </div>
    )
}

export default Works
