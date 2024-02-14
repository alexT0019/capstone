import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { signUpThunk } from "../store/signUpSlice";
import { useNavigate } from "react-router-dom";

const UserRegistrationComponent = (props) => {
    //const md5 = require('md5');
    //const dispatch = useDispatch();
    const navigate = useNavigate();

    //useState
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("");

    //Value change handler
    const valueChange = (event) => {
        if(event.target.id === "create-username"){
            setUsername(event.target.value);
        } else if (event.target.id === "create-password"){
            setPassword(event.target.value);
        } else if (event.target.id === "create-email"){
            setEmail(event.target.value);
        }
        //Error handling
        function errorHandling() {
            if (Username === undefined || Username.length < 4) {
                setErrorMsg("Username must contain at least 4 characters")
            } else if (Password === undefined || Password.length < 8) {
                setErrorMsg("Password must contain at least 8 characters")
            } else {
                setErrorMsg("")
            }
        }
        errorHandling();
    }
    //Thunk
    /*
    function signup(){
        dispatch(signUpThunk(md5(Username), md5(Password), md5(Email)));
    };
    */
    
    //clear state
    function clearState(){
        setUsername("");
        setPassword("");
        setEmail("");
        setErrorMsg("");
    }

    //Handle form submit
    const handleSubmit = (e) => {
        //signup();
        clearState();
        navigate("/profile");
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="text">Username</div>
                    <input type="text" id="create-username" onChange={valueChange} value={Username} />
                    <div className="text">Password</div>
                    <input type="password" id="create-password" onChange={valueChange} value={Password} />
                    <div className="text">Email</div>
                    <input type="email" id="create-email" onChange={valueChange} value={Email} />
                    <p className="errorMsg">{ErrorMsg}</p>
                    <div className="submitContainer">
                    <input type="submit" value="SUBMIT" className="submit" />
                    </div>
                </form>
            </div>
        );
    };

export default UserRegistrationComponent;