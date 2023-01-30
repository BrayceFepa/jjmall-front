import productsList from "./fixtures/products.json";

import requests from "./httpJJmallServices";

// complete _id to every value
let fakeProducts = productsList.map((product, index) => ({
  _id: index.toString(),
  ...product,
}));

const ProductServices = {
  //get all products
  getProducts() {
    return requests.get("/products");
  },

  getShowingProducts() {
    // return requests.get('/products/show');
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(fakeProducts);
      }, 200);
    });
  },

  getDiscountedProducts() {
    // return requests.get("/products/discount");
    return new Promise((res, rej) => {
      setTimeout(() => {
        const discountedFakeProducts = fakeProducts.filter(
          ({ discount }) => discount >= 5
        );
        res(discountedFakeProducts);
      }, 200);
    });
  },

  getProductBySlug(slug) {
    // return requests.get(`/products/${slug}`);
    return new Promise((res, rej) => {
      setTimeout(() => {
        const filteredProduct = fakeProducts.find(
          ({ slug: slugFromDB }) => slug === slugFromDB
        );
        res(filteredProduct);
      }, 200);
    });
  },
};

export default ProductServices;
