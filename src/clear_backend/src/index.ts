import { Server } from 'azle';
import cors from 'cors';
import express from 'express';

export default Server(() =>{
    const app = express ();
    app.use (cors());
    return app.listen();
})
