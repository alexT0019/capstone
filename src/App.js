import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import UserRegistration from "./Pages/UserRegistration";
import UserProfile from "./Pages/UserProfile";
import AugmentedReality from "./Pages/AugmentedReality";
import ProgressTracking from "./Pages/ProgressTracking";


function App() {
  return (
   <div>
    {/* navbar */}
    <nav>
      <Link to="/">Home</Link>
      <Link to="signup">Get Started</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/arlearning">AR Learning</Link>
      <Link to="/progress">Progress Tracking</Link>
    </nav>
    {/* routes */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<UserRegistration />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/arlearning" element={<AugmentedReality />}></Route>
        <Route path="/progress" element={<ProgressTracking />}></Route>
        
      </Routes>
   </div>

  );
}

export default App;
