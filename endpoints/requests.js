/* URL: BASE_URL/plans */
const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");



/* Endpoint*/

router.get("/", requestController.getAllRequests);
// router.get("/:id", requestController.getRequestById);
router.put("/:id/update", requestController.updateRequest);
router.post("/", requestController.createNewRequest);
router.delete("/:id/delete", requestController.deleteRequest);



/* Export the router */
module.exports = router;