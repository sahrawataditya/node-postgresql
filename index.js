const express = require("express");
const colors = require("colors");
const pool = require("./pool");

const app = express();
const PORT = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  pool.query("SELECT * from users;", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json({
        data: result.rows,
        success: true,
      });
    }
  });
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * from users where id = $1;", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json({
        user: result.rows[0],
        success: true,
      });
    }
  });
});
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2);",
    [name, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).json({
          success: true,
          message: "User added successfully",
        });
      }
    }
  );
});
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3;",
    [name, email, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).json({
          success: true,
          message: "User updated successfully",
        });
      }
    }
  );
});
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  pool.query("DELETE FROM users WHERE id = $1;", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.rainbow);
});
