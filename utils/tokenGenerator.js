const randomString = require('randomstring');
const bcrypt = require('bcrypt');

module.exports = function tokenGenerator(email) {
  const token = randomString.generate({
    length: 30,
    charset: 'alphabetic',
  });
  return bcrypt.hashSync(`${email}${token}`, 10);
};
