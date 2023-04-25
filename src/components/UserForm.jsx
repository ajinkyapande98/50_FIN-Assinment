import { useState } from "react";

// eslint-disable-next-line react/prop-types
function UserForm({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Create new user object and add to list
    const newUser = { name, email, phone };
    setUsers([...users, newUser]);

    // Clear the form inputs
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      // className="max-w-md mx-auto"
      className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Add User</h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-gray-700 font-bold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            value={email}
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold" htmlFor="phone">
            Phone:
          </label>

          <input
            type="text"
            value={phone}
            id="phone"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[0-9\b]{0,10}$/; // only allow numbers and up to 10 digits
              if (regex.test(input)) {
                setPhone(input);
              }
            }}
          />
        </div>
        <div className=" text-center">
          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add User
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
