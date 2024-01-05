const express = require("express");
const router = express.Router();
const { InfrastCategories } = require("../models");



//#API METHODS START
router.get("/", async (req, res) => {
    const infrastCategories = await InfrastCategories.findAll();
    res.json(infrastCategories);
  });

router.post("/", async (req, res) => {
  
      const infrastCategory = req.body;
     
  
      await InfrastCategories.create(infrastCategory);
      
    
  });

  router.put("/", async (req, res) => {

      const { id, category, caption } = req.body;
        
     await InfrastCategories.update(
        { category, caption },
        { where: { id } }
      );
     
  });

  router.delete("/:infrastId", async (req, res) => {
    const infrastCategoryId = req.params.infrastId;
    await InfrastCategories.destroy({
      where: { id: infrastCategoryId },
    });
    res.json("Deleted");
  });
//#API METHODS END

module.exports = router;