const db = require("../../database/client");

const insert = (user) => {
  const {
    Lastname,
    Firstname,
    Martricule,
    Password,
    Email,
    Phone,
    Seniority,
    Admin,
  } = user;

  return db.query(
    "INSERT INTO users (Lastname, Firstname, Martricule, Password, Email, Phone, Seniority, Admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [Lastname, Firstname, Martricule, Password, Email, Phone, Seniority, Admin]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE id_Users = ?", [id]);
};

module.exports = {
  insert,
  findById,
};
