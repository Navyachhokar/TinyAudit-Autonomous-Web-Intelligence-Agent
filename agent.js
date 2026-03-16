const axios = require("axios");
require("dotenv").config();

async function runWebAgent(targetUrl) {
  const apiKey = process.env.TINYFISH_API_KEY;

  try {
    console.log(" Agent is starting work on:", targetUrl);
    console.log(" This might take up to 2 minutes. Please wait...");

    const response = await axios.post(
      "https://agent.tinyfish.ai/v1/automation/run", 
      {
        url: targetUrl,
        goal: "Find the title and price of  first book and return it as JSON: { 'title':string, 'price':string}",
        browser_profile: "stealth",
      },
      {
        headers: {
          "X-API-Key": apiKey,
          "Content-Type": "application/json",
          Connection: "keep-alive",
        },
        timeout: 300000, 
      },
    );

    console.log(" Agent Finished!");
    console.dir(response.data, { depth: null });
  } catch (error) {
    if (error.code === "ECONNRESET") {
      console.error(
        " Connection was reset. Try running it again—sometimes the first request times out while the server wakes up.",
      );
    } else if (error.response) {
      console.error(
        " Server Error:",
        error.response.status,
        error.response.data,
      );
    } else {
      console.error(" Error:", error.message);
    }
  }
}

runWebAgent("http://books.toscrape.com/");
