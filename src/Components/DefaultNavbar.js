import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import HiddenMenu from "./HiddenMenu"

const DefaultNavbar = () => {
    //responsive design
    let browserWidth = window.innerWidth;
    const [isMobile, setIsMobile] = useState(false);

    const IsMobileHandler = () => {
        if(browserWidth <= 800){
            setIsMobile(true);
            console.log(isMobile);
            console.log(browserWidth);
        } else {
            setIsMobile(false);
            console.log(isMobile);
            console.log(browserWidth);
        }
    }
    useEffect(()=>{
        IsMobileHandler();
    })

    //Hidden Menu
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    
    return (
        <div>
            {IsMobileHandler}
            {isMobile ? 
            (<nav className="navStyle">
                <Grid container spacing={0}>
                    <Grid item xs={10}>
                        <Button variant="contained" className="linkButtonStyle">
                            <Link className="linkStyle" to="/signup">Get Started</Link>
                        </Button>
                    </Grid>
                    <Grid item xs={2} className="hamburgerToggler">
                        <Button onClick={toggleMenu}>
                            <MenuIcon sx={{ color: 'white' }} fontSize="large" />
                        </Button>
                    </Grid>
                </Grid>
                {menuVisible && <HiddenMenu />}               
            </nav>) : (<nav className="navStyle">
                <Link className="linkStyle" to="/">Home</Link>
                <Link className="linkStyle" to="/profile">Profile</Link>
                <Link className="linkStyle" to="/arlearning">AR Learning</Link>
                <Link className="linkStyle" to="/progress">Progress Tracking</Link>
                <Button variant="contained" className="linkButtonStyle">
                    <Link className="linkStyle" to="/signup">Get Started</Link>
                </Button>
            </nav>)
            }
        </div>
    );
}

export default DefaultNavbar;