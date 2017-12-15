const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({

  name: {
    type: {
      first: {
        type: String,
        trim: true,
        default: '',
        required: true,
      },
      last: {
        type: String,
        trim: true,
        default: '',
        required: true,
      },
    },
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
  },

});

UserSchema.methods.comparePassword = function comparePassword(pass) {
  return bcrypt.compareSync(pass, this.password);
};

UserSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password') || this.isNew) {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  return next();
});

module.exports = mongoose.model('User', UserSchema);
