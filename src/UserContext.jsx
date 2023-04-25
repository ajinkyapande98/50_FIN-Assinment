import { useState, createContext } from "react";

const UserContext = createContext();

function UserContextProvider(props) {
  // const [users, setUsers] = useState([]);

  // const addUser = (newUser) => {
  //   setUsers([...users, newUser]);
  // };
  // console.log(users);
  const value = {
    // users,
    // addUser,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
