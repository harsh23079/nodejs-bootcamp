const registeri = function (username) {
  console.log(`User ${username} has been registered `);
};
const logini = function (username, password) {
  console.log(`User ${username} is logged in `);
};

module.exports = {
  a: registeri,
  b: logini,
};
