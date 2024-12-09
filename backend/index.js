import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import videoRoutes from './routes/video.routes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/control', videoRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
