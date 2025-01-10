const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5174", 
    methods: ["POST", "GET", "PUT", "DELETE"],
  }));

mongoose.connect("mongodb+srv://tejashagrawal:ds1YkYVlTeZc5Sgj@cluster0.8guwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.post("/login", async (req, res) => {
    console.log("Login Request Body:", req.body);
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                if (user.password === password) {
                    res.json("Successfully logged in");
                } else {
                    res.json("Incorrect password");
                }
            } else {
                res.json("User does not exist");
            }
        })
        .catch((err) => {
            console.error("Error in /login:", err);
            res.status(500).json("Server error");
        });
});

app.post("/users", async (req, res) => {
    
    try {
      const user = await UserModel.create(req.body);
      res.json(user);
    } catch (err) {
      console.error("Error:", err);
      res.status(400).json(err);
    }
  });
  

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
