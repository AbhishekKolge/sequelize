const express = require("express");
const app = express();

require("./models");

const userRouter = require("./routes/userRoutes");

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.json("Hello World");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
