import "../App.css";
import {Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

    const isOnline = useOnlineStatus();
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/109220/optimized_large_thumb_stage.jpg" />
            <span>Big Buffet</span>
        </div>
        <ul className="nav-items-container">
            <li className="nav-item">Online Status: {isOnline ? "✅" : "❌"}</li>
            <Link to="/home" className="nav-item"> <li>Home</li></Link>
            <Link to="/about" className="nav-item"><li >About</li></Link>
            <Link to="/contact" className="nav-item"><li >Contact</li></Link>
            <Link to="/login" className="nav-item"><li >Login</li></Link>
            <Link to="/grocery" className="nav-item" ><li>Grocery</li></Link>
        </ul>
    </div>
}

export default Header;