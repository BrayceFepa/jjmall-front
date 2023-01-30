import categoryList from "./fixtures/category.json";

// complete _id to every value
let fakeCategory = categoryList.map((category, index) => ({ _id: index.toString(), ...category }));

const CategoryServices = {
  getShowingCategory() {
    // return requests.get("/category/show");
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(fakeCategory);
      }, 200);
    });
  },
};

export default CategoryServices;
