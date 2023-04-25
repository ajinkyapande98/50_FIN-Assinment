import { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return nameMatch || emailMatch;
  });

  return (
    <div className="container mx-auto py-8 bg-white shadow-md rounded-lg p-6 mb-4 ">
      <div className="flex justify-center items-center mb-4 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-2 px-4 rounded-l-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300 w-full md:w-96"
        />
        <button
          onClick={() => setSearchQuery("")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Clear
        </button>
      </div>
      <ul>
        {filteredUsers.map((user, ind) => (
          <li key={ind} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex justify-between mb-2">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </li>
        ))}
      </ul>
      <UserForm users={users} setUsers={setUsers} />
    </div>
  );
};

export default UserList;
