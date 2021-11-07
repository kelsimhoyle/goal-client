import axios from "axios";

const usergoalAPI = {
  create: async (userGoal) => {
    try {
      const newUserGoal = axios.post("/api/usergoal", userGoal);
      return newUserGoal;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  createNewGoal: async (userId, goal, category) => {
    try {
      const newGoal = await axios.post(`/api/usergoal/user/${userId}`, {goal, category})
      return newGoal;
    } catch (error) {
      console.log(error)
    } 
  },
  getAll: async () => {
    try {
      const userGoals = await axios.get("/api/usergoal");
      return userGoals.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getOne: async (userGoalId) => {
    try {
      const userGoal = await axios.get(`/api/usergoal/${userGoalId}`);
      return userGoal.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getByUserId: async (userId) => {
    try {
      const userGoals = await axios.get(`/api/usergoal/user/${userId}`)
      return userGoals.data;
    } catch (error) {
      console.error(error)
      return error;
    }
  },
  update: async (userGoalId, userGoal) => {
    try {
      const updateUserGoal = await axios.put(`/api/usergoal/${userGoalId}`, userGoal);
      return updateUserGoal;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  delete: async (userGoalId) => {
    try {
      const deleted = await axios.delete(`/api/usserGoal/${userGoalId}`);
      return deleted;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default usergoalAPI;