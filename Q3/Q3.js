const data = require("./q3data.json");
const moment = require("moment");

// Find users who doesn't have any phone numbers
const criteria1 = data.filter((item) => {
  return item.profile.phones.length < 1;
});

// Find users who have articles
const criteria2 = data.filter((item) => {
  return item["articles:"].length > 0;
});

// Find users who have "annis" on their name
const criteria3 = data.filter((item) => {
  return item.profile.full_name.match(/annis/gi);
});

// Find users who have articles on year 2020
const criteria4 = data.filter((item) => {
  return item["articles:"].find((article) => {
    return moment(article.published_at).format("YYYY") == 2020;
  });
});

// Find users who are born on 1986
const criteria5 = data.filter((item) => {
  return moment(item.profile.birthday).format("YYYY") == 1986;
});

// Find articles that contain "tips" on the title
const criteria6 = [];
data.forEach((item) => {
  const tips = item["articles:"].filter((article) => {
    return article.title.match(/tips/gi);
  });

  if (tips.length > 0) {
    for (const article of tips) {
      criteria6.push(article);
    }
  }
});

// Find articles published before August 2019
const criteria7 = [];
data.forEach((item) => {
  const articles = item["articles:"].filter((article) => {
    return moment(article.published_at).isBefore("2019-08-01");
  });

  if (articles.length > 0) {
    for (const article of articles) {
      criteria7.push(article);
    }
  }
});
