import './UserProfile.css';
import avator from './Images/avatar.png';

function UserProfile() {
    return(
        <div class="container">
            <div class="left">
                
                <div class="avator">
                    <img style={{width:175, height:171}}
                    src={avator} 
                    alt="Avatar"
                    id="profilePic"
                />
                </div>
                <h3>Janie Lau</h3>
                <p>Grade 5</p>
                <p class="link">Learning Record</p>
                <p class="link">User Setting</p>

            </div>
                <div class="right">
                    

                </div>

        </div>
    );
}
export default UserProfile;