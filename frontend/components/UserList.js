import React, { useState } from "react";

function UserList(props) {
    const [userList, setUserList] = useState([]);

    return (
        <ul>
            {userList.map(user => (
                <li key={user.userName}>{user.userName}</li>
            ))}
        </ul>
    );
}

export default UserList;
