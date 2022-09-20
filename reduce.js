// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((array, brands) => [...array, ...brands.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const agesArray = dogs.map((dog) => dog.age);
  const ageSum = agesArray.reduce((acc, age) => acc + age, 0);
  return Number(ageSum / agesArray.length);
};
