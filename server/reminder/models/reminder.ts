import mongoose from 'mongoose';
const { Schema } = mongoose;

const remindersSchema = new Schema ({
    platformName: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Reminder", remindersSchema);
