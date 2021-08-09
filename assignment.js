/* ******************************************************************************
 ১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 
 ******************************************************************************* */



/* code:1 */
function seerToMon(seer) {
  const mon = seer / 40;
  if (typeof seer == 'number' && seer > 0) {
    return mon;
  }
  // Message for wrong input 
  else {
    return 'Sorry, input number is not valid!';
  }
}

const amount = seerToMon(80);
// console.log(amount);



/* ২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি শার্টের দাম – ১০০ টাকা

১ টি প্যান্টের দাম – ২০০ টাকা 

১ টি জুতার দাম – ৫০০ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। */




/* code:2 */
function totalSales(shirt, pant, shoe) {
  // Message for wrong input 
  if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoe != 'number') {
    return 'Please! input a valid number';
  }
  else if (shirt <= 0 || pant <= 0 || shoe <= 0) {
    return 'please input a positive number';
  }

  // declaring price for each prodicts
  const perShirtPrice = 100;
  const perPantPrice = 200;
  const perShoePrice = 500;
  // price calculation
  const totalshirtPrice = shirt * perShirtPrice;
  const totalPantPrice = pant * perPantPrice;
  const totalShoePrice = shoe * perShoePrice;

  // total price of all products
  const totalSellPrice = totalshirtPrice + totalPantPrice + totalShoePrice;
  return totalSellPrice;
}

const salePrice = totalSales(1, 1, 1);
// console.log(salePrice);




/* ************************************************************************
 ৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 

যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 

যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 


এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 

আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 
****************************************************************************** */




/* code:3 */
function deliveryCost(tShirt) {
  // Message for wrong input 
  if (typeof tShirt != 'number') {
    return 'Please! input a valid number';
  }

  else if (tShirt < 0) {
    return 'Please! input a positive number';
  }

  // declaring delivery charge chart
  const tShirtDeliveryUnder100 = 100;
  const tShirtDeliveryUp100 = 80;
  const tShirtDeliveryUp200 = 50;

  // condition implementing
  if (tShirt <= 100) {
    const first100Cost = tShirt * tShirtDeliveryUnder100;
    return first100Cost;
  }
  else if (tShirt <= 200) {
    const first100TShirt = 100 * tShirtDeliveryUnder100;
    const restCharge = tShirt - 100;
    const second100TShirt = restCharge * tShirtDeliveryUp100;
    const totalTShirtCost = first100TShirt + second100TShirt;
    return totalTShirtCost;
  }
  else {
    const first100TShirt = 100 * tShirtDeliveryUnder100;
    const second100TShirt = 100 * tShirtDeliveryUp100;
    const restCharge = tShirt - 200;
    const restChargeOfTShirt = restCharge * tShirtDeliveryUp200;
    const totalTShirtDeliveryCost = first100TShirt + second100TShirt + restChargeOfTShirt;
    return totalTShirtDeliveryCost
  }
}


const deliveryCharge = deliveryCost(250);
// console.log(deliveryCharge);




/* *******************************************************************
৪. [ ফাংশন perfectFriend]: perfectFriend function and return string
*********************************************************************/



/* code:4 */
function perfectFriend(friendsName) {
  // Message for wrong input 
  if (typeof friendsName != 'object') {
    return 'Sorry, there is something wrong!'
  }

  // check the condition
  for (const name of friendsName) {
    if (name.length == 5) {
      return name;
    }
    else {
      continue;
    }
  }

}


const friends = ["Eshita", "Antor", "mukit", "Pritom", , "Debbrata", 'Mitu', "tanjina", "lily"];
const friendName5Character = perfectFriend(friends);
console.log(friendName5Character);