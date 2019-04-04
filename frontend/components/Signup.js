import React, { useState } from "react";

function Signup() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const newUser = {
            userName,
            password
        }

    }
    return (
        <React.Fragment>
            <form className="signupForm" onSubmit={handleSubmit}>
                <label htmlFor="userNameInput">UserName</label>
                <input
                    id="userNameInput"
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <label htmlFor="userNameInput">UserName</label>
                <input
                    id="passwordInput"
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </React.Fragment>
    );
}

export default Signup;
