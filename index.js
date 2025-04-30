const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  const { userName, email, password, dateOfBirth } = req.body;
  try {
    if (!userName || email) {
      return res.send({
        message: "Both user name and email is required",
      });
    } else {
      res.send({
        message: "user created successfully",
        name: userName,
        email: email,
      });
    }
  } catch (err) {
    res.send({
      message: "Server error",
    });
  }

  if(length(password < 8 || length(password >= 16))) {
    return res.send({
        message: "Password length should be greater than 8 or less than or equal to 16"
    })
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});











































