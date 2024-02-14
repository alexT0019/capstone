import './UserProfile.css';
import avator from './Images/avatar.png';

function UserProfile() {
    return(
        <div class="flex-container">
            <div class="flex-item-left">
                HAHA
                HAHA
                <div class="avator">
                    <img style={{width:175, height:171}}
                    src={avator} 
                    alt="Avatar"
                    id="profilePic"
                />
                </div>

                <div class="flex-item-right">
                    RIGHT SIDE

                </div>

            </div>

        </div>
    );
}
export default UserProfile;