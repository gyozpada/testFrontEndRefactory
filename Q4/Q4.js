const data = require("./data.json");
const moment = require("moment");

// Find items in Meeting Room
const criteria1 = data.filter((item) => {
  return item.placement.name === "Meeting Room";
});

// Find all electronic devices
const criteria2 = data.filter((item) => {
  return item.type === "electronic";
});

// Find all furnitures
const criteria3 = data.filter((item) => {
  return item.type === "furniture";
});

// Find all items was purchased at 16 Januari 2020
const criteria4 = data.filter((item) => {
  const date = new Date(1000 * item.purchased_at);
  return moment(date).format("YYYY-MM-DD") === "2020-01-16";
});

// Find all items with brown color
const criteria5 = data.filter((item) => {
  return item.tags.includes("brown");
});

console.log(criteria5);
