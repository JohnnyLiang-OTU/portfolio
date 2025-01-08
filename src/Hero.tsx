import portrait from "./assets/test_portrait.png"
import "./Hero.css"
function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-left">
                <img src={portrait} alt="hero-portrait"></img>
            </div>
            <div className="hero-right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam fugiat 
                    et tempore mollitia ipsum rem, molestias quod nam a quae similique necessitatibus 
                    deserunt dicta facilis fuga eum quasi ipsa.</p>
            </div>
        </div>
    );
}

export default Hero;