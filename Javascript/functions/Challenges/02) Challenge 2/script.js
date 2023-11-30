
const minMax = (arr) => {
   const min = Math.min(...arr);
   const max = Math.max(...arr);

   const obj = {
    min, 
    max
   }

   return obj;
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9]))