import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SensorData = () => {
    const [sensorData, setSensorData] = useState([]);
    const [ph, setPh] = useState('');
    const [turbidez, setTurbidez] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/sensorData/')
            .then(response => {
                setSensorData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSensorData = {
            ph,
            turbidez
        };

        axios.post('http://localhost:5000/sensorData/add', newSensorData)
            .then(res => console.log(res.data));

        setSensorData([...sensorData, newSensorData]);
        setPh('');
        setTurbidez('');
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header text-center">
                    <h1>Datos de Sensores de Purificador de Agua</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="ph">pH:</label>
                            <input type="number" id="ph" name="ph" className="form-control" step="0.01" value={ph} onChange={(e) => setPh(e.target.value)} required />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="turbidez">Turbidez:</label>
                            <input type="number" id="turbidez" name="turbidez" className="form-control" step="0.01" value={turbidez} onChange={(e) => setTurbidez(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Guardar Datos</button>
                    </form>
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h2>Historial de Datos</h2>
                </div>
                <div className="card-body">
                    <ul id="dataList" className="list-group">
                        {sensorData.map((data, index) => (
                            <li key={index} className="list-group-item">
                                pH: {data.ph}, Turbidez: {data.turbidez}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SensorData;
