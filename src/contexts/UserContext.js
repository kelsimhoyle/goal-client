import React, { createContext, useState } from "react";
import userAPI from "../utils/API/user";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  const logOut = () => {
    userAPI
      .logOut({ user: { ...user } })
      .then((res) => {
        console.log(res);
        setUser(null);
      })
      .catch((err) => console.log(err));
  };

  const logIn = (loginData, next) => {
    userAPI
      .login(loginData)
      .then((res) => {
        console.log("login data: ", res.data);
        setUser(res.data);
        next(null, { loggedIn: true, ...res.data });
      })
      .catch((err) => {
        console.log(err);
        next(err, { loggedIn: false });
      });
  };

  const val = {
    user,
    setUser,
    goals,
    setGoals,
    loading,
    setLoading,
    logIn,
    logOut,
  };
  return <UserContext.Provider value={val}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
