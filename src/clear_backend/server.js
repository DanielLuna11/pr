import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import sensorDataRouter from './routes/SensorData.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/sensores')
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Rutas
app.use('/sensorData', sensorDataRouter);

// Define una ruta simple
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
