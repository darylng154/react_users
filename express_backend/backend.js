const express = require("express");
const cors = require("cors");

const userServices = require("./models/user/user-services");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => 
{
   res.send("Hello World!"); 
});

// user queries
app.get("/users", async (req, res) =>
{
   const firstName = req.query["firstName"];

   try
   {
      const db_users = await userServices.getUsers(firstName);
      res.send({user_list: db_users});
   }
   catch(error)
   {
      console.log("Error in get/users: \n" + error)
      res.status(500).send("An error occured in the server.");
   }
});

app.get("/users/:id", async (req, res) => 
{
   const id = req.params['id'];
   const result = await userServices.findUserById(id);

   if(result == undefined || result == null)
   {
      res.status(404).send("User not found.")
   }
   else
   {
      res.send({users_list: result});
   }
});

// /user/firstName endpoint
app.get("/users/:firstName", async (req, res) =>
{
   const firstName = req.params["firstName"];
   const result = await userServices.findUserByFirstName(firstName);

   if(result === undefined || result == null)
   {
      res.status(404).send("User not found.")
   }
   else
   {
      res.send({users_list: result});
   }
});

app.post("/users", async (req, res) => 
{
   const user = req.body;
   const savedUser = await userServices.addUser(user);

   if(savedUser)
   {
      res.status(201).send(savedUser);
   }
   else
   {
      res.status(500).end();
   }
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});  