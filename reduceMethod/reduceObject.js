import { itemsBoughtArr } from "./itemsBoughtArr.js";
/* discount default parameter */
function calculateTotalCost(itemsBoughtArr, discount) {
  const total = itemsBoughtArr.reduce(function (prev, current) {
    return prev + current.priceUSD;
  }, 0);
 
  return total
}
console.log(calculateTotalCost(itemsBoughtArr,10)); 