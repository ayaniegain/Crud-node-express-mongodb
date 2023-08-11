const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const app = express();
let PORT = 8000;
const connectDB =require("./config/db")

//mongodb function call
connectDB()

// middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(bodyparser.urlencoded({ extended: false }));

//routes
app.use("/api/v1/users", require("./routes/userRoutes"))
app.use("/api/v1/contact-form", require("./routes/userRoutes"))

//template pug engine
app.set('view engine', 'pug')
app.set('views', './views')

// view routes
app.get('/', (req, res) => {
  res.render('firstfile')
})



app.listen(PORT, () => {
  console.log("run port no:", PORT);
});
