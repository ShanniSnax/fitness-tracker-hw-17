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
            name: {
                type: String, 
                trim: true,
                required: "No Empty, No Bueno"
            },
            duration: {
                type: String, 
                trim: true,
                required: "No Empty, No Bueno"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
