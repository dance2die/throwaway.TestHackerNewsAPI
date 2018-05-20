// For React app, refer to
// https://codeburst.io/on-connecting-my-app-to-the-hackernews-firebase-api-e7b9e1ccec29
const axios = require("axios");
const cl = console.log;

const topStoriesURL = `https://hacker-news.firebaseio.com/v0/topstories.json`;

const getItemURL = id =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
const getItem = async id => {
  const { data } = await axios.get(getItemURL(id));
  return data;
};

async function main() {
  const result = await axios.get(topStoriesURL);
  const itemPromises = result.data.slice(0, 5).map(getItem);
  const items = await Promise.all(itemPromises);

  cl(items);
}

main();
