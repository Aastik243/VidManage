import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Handle saving the recorded video
export const saveVideo = (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: 'No video file uploaded' });
    }

    res.status(200).json({ message: 'Video uploaded successfully', file });
};

// Get list of all recorded videos
export const getVideos = (req, res) => {
    const videosDirectory = path.join(__dirname, '..', 'videos');
    console.log("Videos directory path:", videosDirectory); // Add this line to debug
   // const files = fs.readdirSync(videosDirectory);
   // console.log("Files in directory:", files);  // Debugging line to log file names

    if (!fs.existsSync(videosDirectory)) {
        return res.status(200).json([]);
    }
    

    const files = fs.readdirSync(videosDirectory).map((file) => ({
        id: file,
        name: file,
        path: `/api/video/${file}`,
    }));

   res.status(200).json(files);
   
};

// Get a specific video by ID (filename)
export const getVideoById = (req, res) => {
    const { id } = req.params;
    const filePath = path.join(__dirname, '..', 'videos', id);

    if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
    } else {
        return res.status(404).json({ message: 'Video not found' });
    }
};