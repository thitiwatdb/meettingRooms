const express = require("express");
const app = express();
const morgan = require("morgan"); //for read status HTTP
const { readdirSync } = require("fs"); //for read file
const cors = require("cors"); //for link client

//const authRouter = require("./routes/auth");
//const bookingRouter = require("./routes/booking");

//midleware
app.use(morgan(`dev`)); //Setting command running server "npm start"
app.use(express.json()); //Read json
app.use(cors()); //for link Client

//Router
//app.use("/api", authRouter);
//app.use("/api", bookingRouter);
readdirSync("./routes").map((c) => app.use("/api", require("./routes/" + c)));

//start server
app.listen(5000, () => console.log("server is running on port 5000"));
