import './Header.css'
function Header(){
    return (
        <div className="header">
            <div className='header-left'>
                <a href='/'><p>JOHNNY LIANG</p></a>
            </div>
            <div className='header-right'>
                <a href='/#section-hero'><h3>Home</h3></a>
                <a href='/#section-project'><h3>Projects</h3></a>
                <a href="#"><h3>Interests</h3></a>
            </div>
        </div>
    )
}

export default Header;