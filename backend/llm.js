const axios = require("axios");

async function askLLM(message) {
  const response = await axios.post(
    "http://localhost:8080/v1/chat/completions",
    {
      messages: [
        {
          role:"system",
          content: "Only answer the questions in 3 or lesser sentences."
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = askLLM;
