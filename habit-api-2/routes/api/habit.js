const mongoose = require('mongoose');
const router = require('express').Router();
// const auth = require('../auth');
const Habits = mongoose.model('Habits');
const HabitPerformed = mongoose.model('HabitPerformed');
// const Time = mongoose.model('Time');

//POST new user route (optional, everyone has access)
router.get('/', (req, res, next) => {
    const id = req.query.id;
    console.log({id: req.query})

    Habits.findOne({_id: id} )
      .then((habit) => {
        res.json(habit)
      })
      .catch((error) => {
        res.json({status: 'error', message: error.message});
      })
});

router.get('/all', (req, res, next) => {

    Habits.find()
      .then((habits) => {
        res.json(habits)
      })
      .catch((error) => {
        res.json({status: 'error', message: error.message});
      })
});

router.delete('/delete', (req, res, next) => {
  console.log(req.body);
  // res.json({status: 'error', message: req.body.id});
  Habits.findById(req.body.id, function (err, habit) {
    if(habit) {
      Habits.findByIdAndRemove(req.body.id, (err, habit) => {
          // As always, handle any potential errors:
          if (err) return res.status(500).send(err);
          // We'll create a simple object to send back with a message and the id of the document that was removed
          // You can really do this however you want, though.
          const response = {
              message: "Todo successfully deleted",
              id: habit._id
          };
          return res.status(200).send(response);
      })
      .catch((err) =>{
        console.log(err);
        return res.status(500).send(err)
      });
    } else {
      return res.status(404).json({message:'not found'})
    }

  })
  } );


router.post('/new', (req, res, next) => {
  const habit = req.body.habit;

  console.log(habit);

  if(!habit) {
    throw new Error('Empty request');
  }
  const newHabit = new Habits(habit);

  newHabit.save()
    .then(() => {
      res.json({ habit: newHabit })
    })
    .catch((error) => {
      console.error( 'onRejected function called: ' + error.message );
      res.json({status: 'error', message: error.message});
    });
});

router.put('/update', (req, res, next) => {
  const updatedHabit = req.body.habit;
  if(!updatedHabit) {
    throw new Error('Empty request');
  }
  Habits.findOne({_id: updatedHabit._id} )
    .then((dbHabit) => {
      console.log('trying to update habit');
      console.log({dbHabit: dbHabit, updateHabit: updatedHabit});
      Object.assign(dbHabit, updatedHabit);
      dbHabit.save()
        .then(() => {
          res.json({message: 'updated successfully', habit: dbHabit})
        })
        .catch((error) => {
          console.error( 'onRejected function called: ' + error.message );
          res.json({status: 'error', message: error.message});
        });
    });
});

router.post('/habitPerformed', (req, res, next) => {
  const dayPerformed = req.body.dayPerformed;
  const habitId = req.body.habitId;

  if(!dayPerformed || !habitId) {
    throw new Error('Faulty request');
  }

  const newHabitPerformed = new HabitPerformed(dayPerformed);

  Habits.findOne({_id: habitId} )
    .then((habit) => {
      habit.daysPerformed.push(newHabitPerformed);
      habit.save()
        .then(() => {
          res.json({message: 'added successfully', habit: habit, dayPerformed: newHabitPerformed})
        })
        .catch((error) => {
          res.json({status: 'error', message: error.message});
        });
    });
});


var updateHabitFieldsfunciton

module.exports = router;
