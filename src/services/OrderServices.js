import requests from "./httpJJmallServices";
import ordersList from "./fixtures/orders.json";

// complete _id to every value
let fakeOrders = ordersList.map((order, index) => ({ _id: index.toString(), ...order }));

const OrderServices = {
  addOrder(body, headers) {
    return requests.post("/order/add", body, headers);
  },

  createPaymentIntent(body) {
    return requests.post("/order/create-payment-intent", body);
  },

  getOrderByUser({ page = 1, limit = 8 }) {
    // return requests.get(`/order?limit=${limit}&page=${page}`);
    return new Promise((res, rej) => {
      setTimeout(() => {
        const filteredOrders = fakeOrders.filter((order, ind) => ind <= limit * page && ind >= limit * (page - 1));
        res(filteredOrders);
      }, 200);
    });
  },
  getOrderById(id, body) {
    // return requests.get(`/order/${id}`, body);
    return new Promise((res, rej) => {
      setTimeout(() => {
        const filteredOrder = fakeOrders.find(({ _id: idFromDB }) => _id === idFromDB);
        res(filteredOrder);
      }, 200);
    });
  },
};

export default OrderServices;
