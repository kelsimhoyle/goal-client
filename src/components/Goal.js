import React, { useState} from "react";
import goalAPI from "../utils/API/goal";

const Goal = ({ userGoal, setLoading }) => {
  const { goal_id, category, goal, created_date, target_date, completed } =
    userGoal;

  const [finished, toggleFinished] = useState(completed);

  const toggleCompletion = () => {
    setLoading(true);
    goalAPI
      .update(goal_id, {
        title: goal,
        target_date: target_date,
        completed: !finished,
      })
      .then((data) => {
        console.log(data);
        toggleFinished((prev) => !prev);
        setLoading(false);
      });
  };

  const deleteGoal = () => {
      setLoading(true);
      goalAPI
        .delete(goal_id)
        .then((data) => {
            console.log(data)
            setLoading(false)
        })
        .catch(error => console.log(error))
        
  }
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <button
        type="button"
        className="absolute top-0 right-0 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={deleteGoal}
      >
        <span className="sr-only">Close menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h4 className="text-lg">{goal}</h4>
      <p>Created: {created_date}</p>
      <p>Target date: {target_date}</p>
      <p>Category: {category}</p>

      <input
        type="checkbox"
        checked={finished}
        onChange={() => toggleCompletion()}
      />
    </div>
  );
};

export default Goal;
