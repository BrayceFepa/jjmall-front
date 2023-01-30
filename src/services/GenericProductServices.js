import requests from "./httpJJmallServices";

const GenericProductServices = {
  addGenericProduct(body, headers) {
    return requests.post("/generic-products", body, headers);
  },

  getGenericProduct({ page = 1, limit = 8 }) {
    return requests.get(`/generic-products`);
  },

  getGenericProductById(id, body) {
    return requests.get(`/generic-products/${id}`, body);
  },

  updateGenericProduct(id, body) {
    return requests.put(`/generic-products/${id}`, body);
  },

  deleteGenericProduct(id) {
    return requests.delete(`/generic-products/${id}`);
  },
};

export default GenericProductServices;
