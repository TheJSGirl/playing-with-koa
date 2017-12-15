const mongoose = require('mongoose');
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

module.exports = mongoose.model('User', UserSchema);
