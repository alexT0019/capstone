import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import UserRegistration from "./Pages/UserRegistration";
import UserProfile from "./Pages/UserProfile";
import AugmentedReality from "./Pages/AugmentedReality";
import ProgressTracking from "./Pages/ProgressTracking";
import { Button } from 'react-bootstrap';

function App() {
  return (
   <div>
    {/* navbar */}
    <nav className="navStyle">
      <Link className="linkStyle" to="/">Home</Link>
      <Link className="linkStyle" to="/profile">Profile</Link>
      <Link className="linkStyle" to="/arlearning">AR Learning</Link>
      <Link className="linkStyle" to="/progress">Progress Tracking</Link>
      <Button className="linkButtonStyle">
        <Link className="linkStyle" to="/signup">Get Started</Link>
      </Button>
    </nav>
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
      <Link className="footerLinkStyle" to="/">Home</Link>
      <span className="footerContainer">
        <Link className="footerLinkStyle" to="/profile">Profile</Link>
        <span className="footerContainer2">
          <Link className="footerLinkStyle2" to="/signup">Get Started</Link>
          <Link className="footerLinkStyle2" to="/progress">Progress Tracking</Link>
        </span>
      </span>
      <Link className="footerLinkStyle" to="/arlearning">AR Learning</Link>
      <span className="footerCopyright">Copyright 2024©All rights reserved</span>
    </footer>
   </div>

  );
}

export default App;
