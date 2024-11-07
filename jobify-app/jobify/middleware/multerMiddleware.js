import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Destination
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    // File name
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
