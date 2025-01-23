const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => 
{
   res.send("Hello World!"); 
});

app.get("/users", (req, res) =>
{
   res.send(users);
});

app.post("/users", (req, res) => 
{
   const userToAdd = req.body;
   addUser(userToAdd);
   res.status(200).end();
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});  