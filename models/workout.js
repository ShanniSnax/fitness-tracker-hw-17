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
                required: true,
                enum: ["cardio", "resistance"],
            }, 
            name: {
                type: String, 
                trim: true,
                required: true
            },
            duration: {
                type: String, 
                trim: true,
                required: true
            },
            weight: {
                type: Number,
                min: 1
            },
            reps: {
                type: Number,
                min: 1
            },
            sets: {
                type: Number,
                min: 1
            },
            distance: {
                type: Number,
                min: 1
            },
        }]
    },
        {
        toJSON: {
            virtuals: true
        }
        
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
