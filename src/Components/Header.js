import {Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

    const isOnline = useOnlineStatus();
    return <div className="flex justify-between bg-pink-200 p-2 items-center">
        <div className="w-20 flex items-center">
            <img className="rounded-full" src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/109220/optimized_large_thumb_stage.jpg" />
            <span className="ps-2">Big Buffet</span>
        </div>
        <ul className="flex justify-around">
            <li className="pe-6">Online Status: {isOnline ? "✅" : "❌"}</li>
            <Link to="/" className="pe-6"> <li>Home</li></Link>
            <Link to="/about" className="pe-6"><li >About</li></Link>
            <Link to="/contact" className="pe-6"><li >Contact</li></Link>
            <Link to="/login" className="pe-6"><li >Login</li></Link>
            <Link to="/grocery" className="pe-6" ><li>Grocery</li></Link>
        </ul>
    </div>
}

export default Header;