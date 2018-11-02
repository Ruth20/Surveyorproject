/* URL: BASE_URL/plans */
const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");

/* Define Endpoints Here */
router.get("/", planController.getAllPlans);
// router.get("/:id", planController.getPlanById);
router.put("/:id/update", planController.updatePlan);
router.post("/", planController.createNewPlan);
router.delete("/:id/delete", planController.deletePlan);




/* Export the router */
module.exports = router;