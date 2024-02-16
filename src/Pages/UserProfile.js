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
                <h3>Learning Record</h3>
                <h3>User Setting</h3>

            </div>
                <div class="right">
                    

                </div>

        </div>
    );
}
export default UserProfile;