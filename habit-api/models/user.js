const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
      local            : {
          email        : {type: String, unique: true, required: true, dropDups: true},
          username     : {type: String, unique: true, required: false, dropDups: true},
          password     : {type: String, required: true},
      },
      facebook         : {
          id           : String,
          token        : String,
          name         : String,
          email        : String
      },
      twitter          : {
          id           : String,
          token        : String,
          displayName  : String,
          username     : String
      },
      google           : {
          id           : String,
          token        : String,
          email        : String,
          name         : String
      }
  });

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('user', userSchema);
