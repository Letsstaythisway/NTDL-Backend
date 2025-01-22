import express from "express";
const app = express();

const PORT = 5500;

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "todo",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
