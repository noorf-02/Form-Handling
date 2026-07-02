import React, { useState } from "react";

function FormComponent() {

    const[ name,setName ] = useState("");
    const[ email,setEmail ] = useState("");
    const[ password,setPassword ] = useState("");



  return (
    <>
      <h1 className="text-3xl text-center font-bold my-3">Form Component</h1>

      <div className="wrapper formHandler flex flex-col items-center gap-5">
        <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
          <label className="text-[18px]" htmlFor="fullName">Full Name</label>
          <input
            className="border-gray-200 w-[400px] border-1 h-9 rounded-[10px]"
            type="text"
            id="fullName"
            value={name}
            
          />
            </div>

            <div className="flex flex-col gap-1">
          <label className="text-[18px]" htmlFor="email">Email</label>
          <input
            className="border-gray-200 w-[400px] border-1 h-9 rounded-[10px]"
            type="email"
            id="email"
            value={email}
            
          />
          </div>
        
            <div className="flex flex-col gap-1">
          <label className="text-[18px]" htmlFor="password">Password</label>
          <input
            className="border-gray-200 w-[400px] border-1 h-9 rounded-[10px]"
            type="password"
            id="password"
            value={password}
            
          />
          </div>

        </form>
        <button
          className="bg-green-600 text-white py-1 px-4 font-medium rounded-2xl w-fit hover:bg-green-700"
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default FormComponent;
