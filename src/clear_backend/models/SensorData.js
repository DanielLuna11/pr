import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sensorDataSchema = new Schema({
    ph: {
        type: Number,
        required: true
    },
    turbidez: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

export default SensorData;

