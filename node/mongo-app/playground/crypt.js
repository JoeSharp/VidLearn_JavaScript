const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = "$2a$10$.ShJ3YS3Cgb.ngvw8RPKCeURYhmRBFqRmXVfJvbwXr0keGzNyOzJm";

bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log('Password Comparison:', result);
});
