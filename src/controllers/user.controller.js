exports.profile = (req, res) => {
  // req.user comes from JWT middleware

  return res.status(200).json({
    message: 'User profile fetched successfully',
    data: req.user
  });
};