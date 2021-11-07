import React, {useState} from "react";
import userAPI from "../../../utils/API/user";

const NewUser = () => {
    const [name, setName] = useState("");

    const submitName = (e) => {
        e.preventDefault();

        userAPI.create(name)
        
    }

  return (
    <form onSubmit={submitName}>
      <label htmlFor="name" className="block font-bold text-sm mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
      />

      <button className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm">
        Submit
      </button>
    </form>
  );
};

export default NewUser;
