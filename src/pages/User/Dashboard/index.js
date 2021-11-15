import React, { useState, useEffect, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";

import { UserContext } from "../../../contexts/UserContext";
import usergoalAPI from "../../../utils/API/usergoal";
import userAPI from "../../../utils/API/user";
import Goal from "../../../components/Goal";
import NewGoal from "../../../components/forms/NewGoal";

const Dashboard = () => {
  const { user, setUser, setGoals, loading, setLoading } = useContext(UserContext);
  const [userGoals, setUserGoals] = useState({ completed: [], todo: [] });
  //   const [user, setUser] = useState("");
//   const [loading, setLoading] = useState(true);
  // get all of the goals
  // options to sort
  // add new
  // update
  // delete
  let { id } = useParams();

  useEffect(() => {
    let completed = [];
    let todo = [];
    usergoalAPI
      .getByUserId(id)
      .then((data) => {
        setGoals(data);
        data.forEach((goal) =>
          goal.completed ? completed.push(goal) : todo.push(goal)
        );
        setUserGoals({
          completed: [...completed],
          todo: [...todo],
        });
      })
      .catch((error) => console.log(error));

    setLoading(false);

    return () => {
      setUserGoals({ completed: [], todo: [] }); // This worked for me
    };
  }, [id, loading]);

  if (!user) return <Redirect to="/" push={true} />
  return (
    <div className="container mx-auto flex-column align-center mt-10">
      <h1 className="text-3xl uppercase">{user.first_name}'s Goals</h1>
      <div className="flex align-center gap-4">
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div>
              <h4>To Do</h4>
              {userGoals.todo.map((goal) => (
                <Goal
                  key={goal.goal_id}
                  userGoal={goal}
                  setLoading={setLoading}
                />
              ))}
            </div>
            <div>
              <h4>Completed</h4>
              {userGoals.completed.map((goal) => (
                <Goal
                  key={goal.goal_id}
                  userGoal={goal}
                  setLoading={setLoading}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="max-w-2xl p-4 m-10 rounded overflow-hidden shadow-lg">
          <h3>Add New Goal</h3>
        <NewGoal />
      </div>
    </div>
  );
};

export default Dashboard;
