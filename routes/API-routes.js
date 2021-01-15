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

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

// get /api/workouts/range

router.get("/api/workouts/range", (req, res) => {
    Workout.find({ day: { $gte: query.start, $lte: query.end } })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// delete /api/workouts

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;