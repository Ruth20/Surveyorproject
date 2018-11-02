/* URL: BASE_URL/plans */
const express = require("express");
const router = express.Router();
const surveyorController = require("../controllers/surveyorController");



/* Endpoint*/

router.get("/", surveyorController.getAllSurveyor);
router.put("/:id/update", surveyorController.updateSurveyor);
router.post("/", surveyorController.createNewSurveyor);
router.delete("/:id/delete", surveyorController.deleteSurveyor);
router.post("/login", surveyorController.loginSurveyor);


/* Export the router */
module.exports = router;