import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { UserContext } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, setUser, logIn } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const submit = (data) => {
    logIn(data, (error, res) => {
     if (error) console.log(error)

     if (res.loggedIn) setRedirect(true)
   });
   
  };

  if (redirect) return <Redirect to={`/user/${user.id}`} push={true} />;

  return (
    <form onSubmit={handleSubmit(submit)}>
     
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

export default LoginForm;
