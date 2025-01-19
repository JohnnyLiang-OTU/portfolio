import "./Hero.css"

import portrait from "./assets/portrait.png"
function Hero(){
    return(
        <div
        id="section-hero"
        className="hero-container">
            <div className="hero-left">

                <p className="name">Johnny Liang</p>
                <p
                style={{
                    color: "whitesmoke",
                    textAlign: "center",
                    fontSize: 50,
                }}
                >Web Development and Data Analysis</p>
            </div>
            <div className="hero-right">
                <img className="portrait" src={portrait}></img>
            </div>
        </div>
    );
}

export default Hero;