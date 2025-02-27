import express from "express";

const app = express();
const port = 9090;

app.get("/", (req, res) => {
  console.log("You've get my API");
  res.send("Hello world, you are getting response from my server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
