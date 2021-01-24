import express from "express";

const PORT = 7777;
const app = express();

app.listen(PORT, () => {
  console.log("Server running on port " + { PORT });
});
