const express = require("express");
const cors = require("cors");
const askLLM = require("./llm");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const answer = await askLLM(message);

    res.json({
      answer,
    });
  } catch (err) {
    console.error(err.response?.data || err);

    res.status(500).json({
      error: "Failed to talk to LLM",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
