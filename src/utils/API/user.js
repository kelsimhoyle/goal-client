import axios from "axios";

const userAPI = {
  create: async (user) => {
    console.log(user)
    try {
      const newUser = await axios.post("/api/user", user);
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
  login: async (user) => {
    try {
      const loggedIn = await axios.post("/api/user/login", user)
      return loggedIn;
    } catch (error) {
      return error;
    }
  },
  logOut: async (user) => {
    try {
      const loggedOut = await axios.post("/api/user/logout", user)
      return loggedOut
    } catch (error) {
      return error
    }
  }
};

export default userAPI;
