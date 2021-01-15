const router = require("express").Router();
const Workout = require("../models/workout");

// post /api/workouts 
router.post("/submit", (req, res) => {
    Workout.create({})     
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// put /api/workouts/:id

router.put("/api/workouts/:id", ( {body, params}, res ) => {
    Workout.findByIdAndUpdate(
        params.id, 
        {$push: {exercises:body}},
        {new:true, runValidators:true}
    )     
    .then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// get /api/workouts

// get /api/workouts/range

// delete /api/workouts


module.exports = router;