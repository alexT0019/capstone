import './landingPage.css';
import Button from '@mui/material/Button';
function LandingPage() {
    return(
      <div class="flex-container">
        <div class="flex-item-left">
          <img 
            src="/src/Pages/schoolBagGlobeRocket.png"
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