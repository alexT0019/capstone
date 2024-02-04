import "./UserRegistration.css"
import picture from "../Images/userRegistration.png"

function UserRegistration() {
    return (
      <div>
        <div className="user-registration">
          <div className="rectangle-27"></div>
          <div className="group-1">
            <div className="rectangle-12"></div>
            <div className="email">Email </div>
            <div className="rectangle-6"></div>
            <div className="password">Password </div>
            <div className="rectangle-8"></div>
            <div className="username">Username </div>
            <div className="rectangle-7"></div>
            <div className="sign-up">Sign Up </div>
            <div className="already-have-an-account-sign-in-now">
              <span>
                <span className="already-have-an-account-sign-in-now-span">
                  Already have an account?{" "}
                </span>
                <span className="already-have-an-account-sign-in-now-span2">
                  Sign in now
                </span>
              </span>{" "}
            </div>
            <div className="submit">SUBMIT </div>
          </div>
          <div className="get-started">Get Started </div>
          <div className="progress-tracking">Progress Tracking </div>
          <div className="home">Home </div>
          <div className="profile">Profile </div>
          <div className="ar-learning">AR Learning </div>
          <div className="copyright-2024-all-rights-reserved">
            Copyright 2024©All rights reserved{" "}
          </div>
          <div className="rectangle-13"></div>
          <div className="get-started2">Get Started </div>
          <div className="home2">Home </div>
          <div className="profile2">Profile </div>
          <div className="ar-learning2">AR Learning </div>
          <img className="ar-project-1" src={picture} alt="schoolbag" />
        </div>
      </div>
        <div>
            <nav>
                
            </nav>
        </div>
    );
}
export default UserRegistration;