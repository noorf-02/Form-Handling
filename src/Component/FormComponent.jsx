import React, { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  function handleName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleEmail(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    const user = { name, email, password };
    setUsers([...users,user]);
    console.log([...users,user]);

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <h1 className="text-3xl text-center font-bold my-3">Form Component</h1>

      <div className="wrapper formHandler flex flex-col items-center gap-5">
        <form className="flex flex-col gap-2" onSubmit={submitForm}>
          <div className="flex flex-col gap-1">
            <label className="text-[18px]" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="border-gray-200 w-[400px] border-1 h-9 rounded-[10px]"
              type="text"
              id="fullName"
              value={name}
              onChange={handleName}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[18px]" htmlFor="email">
              Email
            </label>
            <input
              className="border-gray-200 w-[400px] border-1 h-9 rounded-[10px]"
              id="email"
              value={email}
              type="email"
              onChange={handleEmail}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[18px]" htmlFor="password">
              Password
            </label>
            <input
              className="border-gray-200 w-[400px] border-1 h-9 rounded-[10px]"
              id="password"
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <button
            className="bg-green-600 text-white py-1 px-4 font-medium rounded-2xl w-fit hover:bg-green-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
