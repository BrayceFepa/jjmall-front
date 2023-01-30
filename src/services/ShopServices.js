import requests from './httpJJmallServices';

const ShopServices = {
  
  addShop(body) {
    const headers={
      "Content-Type":"multipart/form-data",
    };
    return requests.post('/shops', body, headers);

  },

  // createPaymentIntent(body) {
  //   return requests.post('/order/create-payment-intent', body);
  // },

  getShopByUser({ page = 1, limit = 8 }) {
    return requests.get(`/shops`);
    // return requests.get(`/shops?limit=${limit}&page=${page}`);
  },
  getShopById(id, body) {
    return requests.get(`/shops/${id}`, body);
  },
  updateShop(id, body) {
    return requests.put(`/shops/${id}`, body);
  },
  deleteShop(id) {
    return requests.delete(`/shops/${id}`);
  },
};

export default ShopServices;
