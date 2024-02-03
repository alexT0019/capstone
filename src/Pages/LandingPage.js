import './landingPage.css';
import Button from '@mui/material/Button';
import pic1 from './schoolBagGlobeRocket.png';

function LandingPage() {
    return(
      <div class="flex-container">
        <div class="flex-item-left">
          <img style={{ width: 822, height: 514, alignSelf: 'center'}}
            src={pic1}
            alt="SchoolbagRocketGlobe"
            />
        </div>
          <div class="flex-item-right">
            <h1>LEARNING CANTONESE</h1>
            <h2>the HARDEST Language to learn?</h2>
            <p>Don’t worry!</p>
            <p>Learn Cantonese in a fun and interactive way with our innovative AR Integration feature.</p>
            <p>Sign up NOW to track your learning progress, get feedback and achievements!</p>
            <Button variant="contained">SIGN UP HERE</Button>
          </div>          
      </div>
    );
}
export default LandingPage;