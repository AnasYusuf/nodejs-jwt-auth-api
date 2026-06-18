const db = require('../config/database');

exports.findUserByEmail = async (email) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );

  return rows[0] || null;
};

exports.findUserById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );

  return rows[0] || null;
};

exports.createUser = async (user) => {
  const { name, email, password } = user;

  const [result] = await db.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );

  return {
    id: result.insertId,
    name,
    email
  };
};