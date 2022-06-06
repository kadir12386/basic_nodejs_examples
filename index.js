const express = require("express");
const datarouter = require("./routes/data");
const userRouter = require("./routes/users");

// ejs
// let ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use("/data", datarouter);
app.use("/user", userRouter);

app.get("/ejs", (req, res) => {
  res.render("home");
});

const PORT = 1000;
app.listen(PORT, () => console.log("Server is on", PORT));
