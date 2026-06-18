const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/auth.routes');
const healthRoutes = require('./routes/health.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors());

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//INITIAL BUSINESS LOGIC BELOW...
// Health route (temporary here, we will move later)
// app.get('/api/health', (req, res) => {
//   res.status(200).json({
//     status: 'OK',
//     message: 'API is running'
//   });
// });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/user', userRoutes);

module.exports = app;