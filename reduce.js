// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  const shoesArray = brands.map((brand) => brand.shoes);
  return shoesArray.reduce((previous, current) => previous.concat(current), []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {};
