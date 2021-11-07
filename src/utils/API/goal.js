import axios from "axios";

const goalAPI = {
  create: async (goal) => {
    try {
      const newGoal = axios.post("/api/goal", goal);
      return newGoal;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getAll: async () => {
    try {
      const goals = await axios.get("/api/goal");
      return goals.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getOne: async (goalId) => {
    try {
      const goal = await axios.get(`/api/goal/${goalId}`);
      return goal.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  update: async (goalId, goal) => {
    console.log(goalId, goal)
    try {
      const updateGoal = await axios.put(`/api/goal/${goalId}`, goal);
      return updateGoal;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  delete: async (goalId) => {
    try {
      const deleted = await axios.delete(`/api/goal/${goalId}`);
      return deleted;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default goalAPI;