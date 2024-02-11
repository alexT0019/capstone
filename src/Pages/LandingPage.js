
import "./LandingPage.css";
import Button from '@mui/material/Button';
import landingPic from './schoolBagGlobeRocket.png';

function LandingPage() {
    return (
        <div>
            <div className="index">
        <div className="rectangle-4"></div>
        <div className="rectangle-12"></div>
        
        <div class="flex-container">
        <div class="flex-item-left">
          <img style={{ width: 822, height: 514, alignSelf: 'center'}}
            src={landingPic}
            alt="SchoolbagRocketGlobe"
            />
        </div>
          <div class="flex-item-right">
            <h1>LEARNING CANTONESE</h1>
            <h2>the HARDEST Language to learn?</h2>
            <p>Don't worry!</p>
            <p>Learn Cantonese in a fun and interactive way with our innovative AR Integration feature.</p>
            <p>Sign up NOW to track your learning progress, get feedback and achievements!</p>
            <Button variant="contained">SIGN UP HERE</Button>
          </div>          
      </div>
 
        </div>
    </div>
    );
}
export default LandingPage;