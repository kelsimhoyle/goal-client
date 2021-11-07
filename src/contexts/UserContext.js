import React, {createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [goals, setGoals] = useState([])
    const [loading, setLoading] = useState(true)

    const val = {
        user,
        setUser,
        goals,
        setGoals,
        loading, 
        setLoading
    }
    return (
        <UserContext.Provider
            value={val}
        >
            {children}
        </UserContext.Provider>
    )
};

export {UserContext, UserContextProvider};