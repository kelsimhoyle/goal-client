import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import userAPI from "../../../utils/API/user";
import { UserContext } from "../../../contexts/UserContext";
import { Redirect } from "react-router-dom";

const NewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const createUser = (data) => {

    userAPI.create(data).then((user) => {
      setUser(user.data);
      setRedirect(true);
    });
  };

  if (redirect) return <Redirect to={`/user/${user.id}`} push={true} />;

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <label htmlFor="name" className="block font-bold text-sm mb-2">
        Name
      </label>
      <input
        // defaultValue="First Name"
        {...register("first_name")}
        type="text"
        placeholder="First Name"
        // name="name"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
      />
      <input
        placeholder="Last Name"
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
        {...register("last_name")}
      />
      <input
        placeholder="you@email.com"
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
        type="email"
        {...register("email")}
      />
      <input
        placeholder="Password"
        type="password"
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
        {...register("password")}
      />

      <button className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm">
        Submit
      </button>
    </form>
  );
};

export default NewUser;
