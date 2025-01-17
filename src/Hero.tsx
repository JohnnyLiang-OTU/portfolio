import "./Hero.css"
function Hero(){
    return(
        <div
        className="hero-container">
            <div className="hero-left">

                <p
                style={{
                    fontSize: 200,
                    color: "whitesmoke",
                    textAlign: "center"
                }}>
                    Johnny Liang</p>
                <p
                style={{
                    color: "whitesmoke",
                    textAlign: "center",
                    fontSize: 50,
                }}
                >Web Development and Data Analysis</p>
            </div>
            <div className="hero-right">
                <img src="https://placehold.co/500x700"></img>
            </div>
        </div>
    );
}

export default Hero;