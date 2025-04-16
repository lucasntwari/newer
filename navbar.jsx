import './styling.css'
function Navbar(){
    return(
    <nav className="navbar">
        <h1>Thames</h1>
        <div className="link">
            <a href="#">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Services</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Works</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;
            <a href="#">Contacts</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button><b>DOWNLOAD CV</b></button>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        
    </nav>
    )
}
export default Navbar