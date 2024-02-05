import "./UserRegistration.css"
import picture from "../Images/userRegistration.png"
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

function UserRegistration() {

  const boxStyle = {
    width: 680,
    height: 800,
    borderRadius: '50px',
    bgcolor: '#FFFFFF',
    padding: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

    return (
      <div>
        <Grid container spacing={2} className="container">
          <Grid item xs={6} className="formContainer">
            <Box sx={boxStyle}>
              <div className="title">Sign Up</div>
              <div className="directToSignIn">
                <span className="directToSignInSpan">Already have an account?</span>
                <span className="directToSignInSpan2">Sign in now</span>
              </div>
              <form>
                <div className="text">Username</div>
                <input type="text" />
                <div className="text">Password</div>
                <input type="text" />
                <div className="text">Email</div>
                <input type="text" />
                <div className="submitContainer">
                  <input type="submit" value="SUBMIT" className="submit"/>
                </div>
              </form>
            </Box>
          </Grid>
          <Grid item xs={6} className="imageContainer">
            <img className="image" src={picture} alt="school" />
          </Grid>
        </Grid>
      </div>
    );
}
export default UserRegistration;