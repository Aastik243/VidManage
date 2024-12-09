import express from 'express';
import multer from 'multer';
import { saveVideo, getVideos, getVideoById } from '../controllers/video.controller.js';

const router = express.Router();

// Set up multer for video upload
const upload = multer({ dest: 'videos/' });

router.post('/record', upload.single('video'), saveVideo);
router.get('/videos', getVideos);
router.get('/video/:id', getVideoById);

export default router;
