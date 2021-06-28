import "./NavBar.css"

const NavBar = (props) => {
    return (
        <div className="navbar-container">
            <a className="home" href="home">HOME</a>
            <a className="services" href="services">BUDGETING TOOLS</a>
            <a className="contact us" href="contact-us">CONTACT US</a>
        </div>
    )
}

export default NavBar
