import axios from "axios";

const categoryAPI = {
  create: async (category) => {
    try {
      const newCategory = axios.post("/api/category", category);
      return newCategory;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getAll: async () => {
    try {
      const categorys = await axios.get("/api/category");
      return categorys.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getOne: async (categoryId) => {
    try {
      const category = await axios.get(`/api/category/${categoryId}`);
      return category.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  update: async (categoryId, category) => {
    try {
      const updateCategory = await axios.put(`/api/category/${categoryId}`, category);
      return updateCategory;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  delete: async (categoryId) => {
    try {
      const deleted = await axios.delete(`/api/category/${categoryId}`);
      return deleted;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
export default categoryAPI;