const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId


// const Time  = new Schema({
//
// });
const HabitPerformed = new Schema({
  amount          :       {type: Number},
  comment         :       {type: String},
  time            :       {
    start : { type: Date },
    stop :  { type: Date}
  }
});

const HabitsSchema = new Schema({
  name            :       {type: String},
  description     :       {type: String, required: true},
  active          :       {type: Boolean, required: true, default: true},
  selectedWeekdays :       {type: [String], required: true, default:[1,2,3,4,5,6,7]},
  time            :       {type: String, required: true},
  measureTime     :       {type: Boolean, required: true},
  measureWUnit    :       {type: Boolean, required: true},
  measureUnit     :       {type: String},
  daysPerformed    :       [HabitPerformed]
});


mongoose.model('Habits', HabitsSchema);
mongoose.model('HabitPerformed', HabitPerformed);

// habits: [
//   {
//     _id: 3,
//     name: 'Push-ups',
//     description: 'Do one pushup per day!',
//     active: true,
//     selectedWeekdays:[1, 2, 3, 4, 5, 6, 7],
//     time: "12:00",
//     measureTime: true,
//     measureWUnit: true,
//     measureUnit: 'St',
//     todayPerformedId: 30
//   },

// UsersSchema.methods.setPassword = function(password) {
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };
//
// UsersSchema.methods.validatePassword = function(password) {
//   const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//   return this.hash === hash;
// };
//
// UsersSchema.methods.generateJWT = function() {
//   const today = new Date();
//   const expirationDate = new Date(today);
//   expirationDate.setDate(today.getDate() + 60);
//
//   return jwt.sign({
//     email: this.email,
//     id: this._id,
//     exp: parseInt(expirationDate.getTime() / 1000, 10),
//   }, 'secret');
// }
//
// UsersSchema.methods.toAuthJSON = function() {
//   return {
//     _id: this._id,
//     email: this.email,
//     token: this.generateJWT(),
//   };
// };
