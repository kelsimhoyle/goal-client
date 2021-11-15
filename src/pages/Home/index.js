import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import NewUser from "../../components/forms/NewUser";
import { UserContext } from "../../contexts/UserContext";

import userAPI from "../../utils/API/user";

const Home = () => {
    const [data, setData] = useState(null);
    const {user} = useContext(UserContext);

    useEffect(() => {
      userAPI
        .getAll()
        .then((userData) => setData(userData))
        .catch((error) => console.log(error));
    }, [user]);

    return (
        <>
        <h1>Home</h1>
        <NewUser />
        {/* {data && 
        data.map(user => (
            <div>
                <h3>{user.name}</h3>
                <Link to={`/user/${user.id}`}>View and Edit Goals</Link>
            </div>
        ))
        } */}
        </>
    );
};

export default Home;