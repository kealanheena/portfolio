const express = require("express");
const projectController = require("../controllers/project.contoller");
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = function(req, file, cb) {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
} 

const upload = multer({ 
  storage: storage,
  limits: {
    // fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post("/", upload.single('projectImage'), projectController.createProject);
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProjectById);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
