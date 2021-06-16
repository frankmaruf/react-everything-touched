import React from "react";
import { useState } from "react";

const FunctionalUpdate = () => {
  const UsersList = [
    {
      id: 1,
      name: "Abdullah",
      age: "23",
    },
    {
      id: 2,
      name: "Sakiul",
      age: "20",
    },
  ];
  const [users, setUsers] = useState(UsersList);
  const handleButton = (id) => {
    setUsers((oldUser) => {
      let newUsers = oldUser.filter((user) => user.id !== id);
      return newUsers;
    });
  };
  return (
    <>
      {users.map((user) => (
        <div style={{ textAlign: "center" }} key={user.id}>
          <h3>{user.name}</h3>
          <h4>{user.age}</h4>
          <button onClick={() => handleButton(user.id)}>Delete User</button>
        </div>
      ))}
      <div style={{ textAlign: "center", paddingTop: "1rem" }}>
        <button onClick={() => setUsers(UsersList)}>get users</button>
      </div>
    </>
  );
};

export default FunctionalUpdate;
