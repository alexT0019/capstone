import './App.css';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import UserRegistration from "./Pages/UserRegistration";
import UserProfile from "./Pages/UserProfile";
import AugmentedReality from "./Pages/AugmentedReality";
import ProgressTracking from "./Pages/ProgressTracking";
import Grid from '@mui/material/Grid';
import DefaultNavbar from './Components/DefaultNavbar';
import AuthNavbar from './Components/AuthNavbar';

function App() {
  const location = useLocation();
  const isDefaultNavbar = location.pathname === '/' || location.pathname === '/signup';

  return (
   <div>
    {/* navbar */}
    {/* Showing 'GET STARTED' for landing and signup, 'LOGOUT' for other pages */}
    {isDefaultNavbar ? <DefaultNavbar /> : <AuthNavbar />}
    {/* routes */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/arlearning" element={<AugmentedReality />}></Route>
        <Route path="/progress" element={<ProgressTracking />}></Route>

        <Route path="/signup" element={<UserRegistration />}></Route>

      </Routes>
    {/* footer */}
    <footer className="footerStyle">
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Link className="footerLinkStyle" to="/">Home</Link>
        </Grid>
        <Grid item xs={1}>
            <Link className="footerLinkStyle" to="/profile">Profile</Link>
            <Link className="footerLinkStyle2" to="/signup">Get Started</Link>
            <Link className="footerLinkStyle2" to="/progress">Progress Tracking</Link>
        </Grid>
        <Grid item xs={1}>
          <Link className="footerLinkStyle" to="/arlearning">AR Learning</Link>
        </Grid>
        <Grid item xs={9} className="footerCopyright">
          <span>Copyright 2024©All rights reserved</span>
        </Grid>
      </Grid>
    </footer>
   </div>

  );
}

export default App;
