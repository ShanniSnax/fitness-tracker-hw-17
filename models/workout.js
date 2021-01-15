const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: "No Empty, No Bueno"
            }, 
            name: {},
            duration: {},
            weight: {
                type: Number
            },
            reps: {},
            sets: {},
            distance: {}
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
