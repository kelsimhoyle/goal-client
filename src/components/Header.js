import React, {useContext} from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext";

const Header = () => {
    const {user, logOut} = useContext(UserContext);

return(    
<div className="header p-10">
        <Link to="/">
            <h1 className="text-4xl bold uppercase">Goals Home</h1>
        </Link>
        {user ?  <p onClick={logOut}>
            Log Out
        </p> : 
        <Link to="/login">
            Log In
        </Link>
        }
       
    </div>)
}

export default Header;