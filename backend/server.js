const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "http://localhost:8080/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content:
              "Respond within 3 sentences at max.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }
    );

    const answer =
      response.data.choices[0].message.content;

    res.json({
      answer,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to talk to LLM",
    });
  }
});

app.listen(3000, () => {
  console.log(
    "Server is running on port 3000"
  );
});
