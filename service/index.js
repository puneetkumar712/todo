// import TodoStore  from "./service/TodoStore";
import TodoRouter from "./routes/todo";
const express = require("express");
const app = express();

app.use(express.json())
app.use("/todo", TodoRouter);



const server = app.listen(4200, () => console.log('Server Started'));

module.exports = server;

