import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";

import usergoalAPI from "../../../utils/API/usergoal";

import { UserContext } from "../../../contexts/UserContext";

const NewGoal = () => {
  const { id } = useParams();
  const { setLoading} = useContext(UserContext)
  const [formVals, setFormVals] = useState({
    goal: "",
    category: "",
  });
  const [target_date, setTargetDate] = useState(new Date());

  const submitGoal = (e) => {
    e.preventDefault();
    setLoading(true)
    const goalSubmit = {
      title: formVals.goal,
      target_date: target_date.toISOString().slice(0, 10),
    };
    const categorySubmit = {
      title: formVals.category,
    };
    usergoalAPI
      .createNewGoal(id, goalSubmit, categorySubmit)
      .then((data) => {
          console.log(data)
          setLoading(false);
          setFormVals({
            goal: "",
            category: "",
          })
          setTargetDate(new Date())
        })
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={submitGoal}>
      <label htmlFor="goal" className="block font-bold text-sm mb-2">
        Goal
      </label>
      <input
        type="text"
        name="goal"
        value={formVals.goal}
        onChange={(e) => setFormVals({ ...formVals, goal: e.target.value })}
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
      />
      <label htmlFor="category" className="block font-bold text-sm mb-2">
        Category
      </label>
      <input
        type="text"
        name="category"
        value={formVals.category}
        onChange={(e) => setFormVals({ ...formVals, category: e.target.value })}
        className="block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-blue-200"
      />
      <DatePicker
        selected={target_date}
        onChange={(date) => setTargetDate(date)}
      />

      <button className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm">
        Submit
      </button>
    </form>
  );
};

export default NewGoal;
