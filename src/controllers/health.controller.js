// exports.getHealth = (req, res) => {
//   res.status(200).json({
//     status: 'OK',
//     message: 'API is healthy'
//   });
// };

const { getHealthStatus } = require('../services/health.service');

exports.getHealth = (req, res) => {
  const data = getHealthStatus();

  res.status(200).json(data);
};