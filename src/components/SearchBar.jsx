import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

function SearchBar() {
  const { users, setFilteredUsers } = useContext(UserContext);

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={handleChange}
        className="py-2 px-4 rounded-l-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300 w-full md:w-96"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
