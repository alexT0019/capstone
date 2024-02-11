import { Link } from "react-router-dom";

const HiddenMenu = () => {
    return (
        <div>
            <div className="hiddenMenu">
                <Link className="linkStyle" to="/">Home</Link>
                <Link className="linkStyle" to="/profile">Profile</Link>
                <Link className="linkStyle" to="/arlearning">AR Learning</Link>
            </div>
        </div>
    );
}

export default HiddenMenu;