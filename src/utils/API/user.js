import axios from "axios";

const userAPI = {
  create: async (user) => {
    try {
      const newUser = await axios.post("/api/user", {
        name: user,
      });
      return newUser;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getAll: async () => {
    try {
      const users = await axios.get("/api/user");
      return users.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getOne: async (userId) => {
    try {
      const user = await axios.get(`/api/user/${userId}`);
      return user.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  update: async (userId, user) => {
    try {
      const updateUser = await axios.put(`/api/user/${userId}`, user);
      return updateUser;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  delete: async (userId) => {
    try {
      const deleted = await axios.delete(`/api/user/${userId}`);
      return deleted;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default userAPI;
