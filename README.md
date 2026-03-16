# 🤖 TinyAudit: Autonomous Web Intelligence Agent

Built for the **TinyFish Hackathon**, this project demonstrates a "See-Think-Do" autonomous agent that performs real-world labor on the live web.

## 🌟 The Problem
Traditional scrapers break when a website changes its layout. Business workflows often require manual "labor"—navigating menus, searching, and identifying data—which is time-consuming for humans.

## 🚀 The Solution
TinyAudit uses the **TinyFish Web Agent API** to navigate websites like a human. By providing a high-level goal, the agent:
1. Opens a live browser.
2. Analyzes the UI to find relevant data.
3. Handles navigation (clicking, scrolling) autonomously.
4. Returns clean, structured JSON.

## 🛠️ Tech Stack
- **Engine:** TinyFish API (Agentic Infrastructure)
- **Runtime:** Node.js
- **Libraries:** Axios, Dotenv

## 📈 Example Result
**Goal:** "Find the price of the first book on BooksToScrape."
**Output:**
```json
{
  "title": "A Light in the Attic",
  "price": "£51.77",
  "status": "COMPLETED"
}
```
## 📜 How to Run
- Clone the repo: git clone https://github.com/Navyachhokar/TinyAudit-Autonomous-Web-Intelligence-Agent
- Install dependencies: npm install
- Add your TINYFISH_API_KEY to a .env file.
- Run: node agent.js
