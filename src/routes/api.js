const express = require("express");
const router = express.Router();

const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const StudentsController = require("../controllers/StudentsController");
router.post("/createStudentProfile", StudentsController.createStudentProfile);
router.post("/userLogin", StudentsController.userLogin);
router.get("/readStudentProfile", AuthVerifyMiddleware, StudentsController.readStudentProfile);
router.post("/updateStudentProfile", AuthVerifyMiddleware, StudentsController.updateStudentProfile);

router.get("/recoverVerifyEmail/:email", StudentsController.recoverVerifyEmail);
router.get("/recoverVerifyOTP/:email/:otp", StudentsController.recoverVerifyOTP);
router.post("/recoverResetPass", StudentsController.recoverResetPass);

router.post("/deleteStudentProfile", AuthVerifyMiddleware, StudentsController.deleteStudentProfile);

const WorksController = require("../controllers/WorksController");
router.post("/createWork", AuthVerifyMiddleware, WorksController.createWork);
router.get("/readWork", AuthVerifyMiddleware, WorksController.readWork);
router.post("/updateWork/:id", AuthVerifyMiddleware, WorksController.updateWork);
router.post("/deleteWork/:id", AuthVerifyMiddleware, WorksController.deleteWork);

module.exports = router;