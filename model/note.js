import mongoose from "mongoose";
const { Schema } = mongoose;


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});



const note = mongoose.model('note',noteSchema);

export default note;