import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// তোমার Facebook Page ID & Access Token বসাও
const PAGE_ID = "YOUR_PAGE_ID";
const PAGE_ACCESS_TOKEN = "YOUR_PAGE_ACCESS_TOKEN";

// Live Video তৈরি করার API
app.post("/start-live", async (req, res) => {
  try {
    const url = `https://graph.facebook.com/v20.0/${PAGE_ID}/live_videos?access_token=${PAGE_ACCESS_TOKEN}`;

    const response = await fetch(url, {
      method: "POST"
    });

    const data = await response.json();
    res.json(data); // data তে থাকবে stream_url, id
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));