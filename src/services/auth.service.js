const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

exports.register = async ({ name, email, password }) => {
  const existingUser = await userRepository.findUserByEmail(email);

  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userRepository.createUser({
    name,
    email,
    password: hashedPassword
  });

  return user;
};

exports.login = async ({ email, password }) => {
  const user = await userRepository.findUserByEmail(email);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
};