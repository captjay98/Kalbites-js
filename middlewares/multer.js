import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const filename = `${file.originalname}`;
      cb(null, filename);
    },
  }),
});

export default upload;
