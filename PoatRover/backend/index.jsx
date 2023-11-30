const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const secretKey = 'your-secret-key';
app.use(bodyParser.json());
app.use(cors());

let users = [];

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password, gender } = req.body;

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: "Email is already registered" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    firstname,
    lastname,
    email,
    password: hashedPassword,
    gender,
  };
  users.push(newUser);

  res.json({ message: "Registration successful" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(email,password)
  const user = users.find((user) => user.email === email);
  // console.log(user)
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

  res.json({ token });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
