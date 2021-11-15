import React from "react";
import NewUser from "../../components/forms/NewUser";

const SignUp = () => {
    return (
        <div className="container mx-auto flex-column align-center mt-10">
            <div className="max-w-2xl p-4 m-10 rounded overflow-hidden shadow-lg">
        <h1>SignUp</h1>
        <NewUser />
        </div>
        </div>
    );
};

export default SignUp;