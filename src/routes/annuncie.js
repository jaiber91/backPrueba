const router = require("express").Router();
const controllerAnnuncie = require("../controllers/annuncie");

router.post("/new-announcie", controllerAnnuncie.create);
router.get("/get-announcies", controllerAnnuncie.getAnnuncies);
router.patch("/update-announcie", controllerAnnuncie.updateAnnuncie);

module.exports = router;
