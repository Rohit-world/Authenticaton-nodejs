const express = require("express");
const app = express();
const port = 8080;
const cors=require("cors")
const {dataBaseConnection}=require("./config/db")
const {LoginRoute}=require("./Routes/login.route")
const {SignupRoute}=require("./Routes/singup.route")

app.use(express.json());
app.use(cors({
  origin:"*"
}))

app.get("/", (req, res) => res.send("Welcome to Authentication backend"));
app.use("/login",LoginRoute)
app.use("/signup",SignupRoute)

app.listen(port, async () => {
  try {
    await dataBaseConnection;
    console.log({ msg: "connected to databse" });
  } catch (err) {
    console.log(err);
  }

  console.log(`app listening on port ${port}!`);
});
