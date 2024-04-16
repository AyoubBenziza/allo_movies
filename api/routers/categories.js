const {Router} = require("express");
const router = Router();
const controller = require("../controllers/categories.js");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/",controller.create);
router.put("/:id",controller.update);
router.delete('/:id',controller.delete);

module.exports = router;