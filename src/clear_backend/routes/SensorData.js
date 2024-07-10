import express from 'express';
import SensorData from '../models/SensorData.js'; // Asegúrate de agregar la extensión .js

const router = express.Router();

// Obtener todos los datos
router.route('/').get((req, res) => {
    SensorData.find()
        .then(sensorData => res.json(sensorData))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Agregar nuevos datos
router.route('/add').post((req, res) => {
    const ph = req.body.ph;
    const turbidez = req.body.turbidez;

    const newSensorData = new SensorData({
        ph,
        turbidez
    });

    newSensorData.save()
        .then(() => res.json('Datos añadidos!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
