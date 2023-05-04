//________ initialize  express app_________
const express = require("express");
const app = express();
//_______global middleware_______
app.use(express.json());
app.use(express.urlencoded({ extended: true }))  // to access url from encoded
app.use(express.static('upload'));
const cors = require("cors");
app.use(cors()); //allow http requests local hosts

//________ require modules__________
const auth = require("./routes/auth");
const items = require("./routes/items");
//______________run app____________
app.listen(4000, "localhost", () => {
    console.log("server is runnung");
})
//____________api routes___________
app.use("/auth", auth);
app.use("/items", items);

