const express = require("express");
const router = express.Router();
const { ActivityCategories } = require("../models")


//#API METHODS START
router.get("/", async (req, res) => {
const rows = await ActivityCategories.findAll({
    order: [['id', 'DESC']] // Order by 'id' in descending order
  });
res.json(rows);
});

router.get('/byCatId/:catId', async (req, res) => {
  const catId = req.params.catId;
  
  const activityCategory = await ActivityCategories.findByPk(catId);
  res.json(activityCategory);
});


router.post("/", async (req, res) => {
const row = req.body;
await ActivityCategories.create(row);
res.status(200).json({success: true, message: 'Data saved successfully.' });
});

router.put("/", async (req, res) => {
 const { id, activity ,description  } = req.body;
 await ActivityCategories.update(
{activity ,description },
{ where: { id } }
  );
 res.status(200).json({ success: true, message: 'Data updated successfully.' });
  });

router.delete("/:keyId", async (req, res) => {
 const rowId = req.params.keyId;
 await ActivityCategories.destroy({
where: { id: rowId },
});
res.json("Deleted");
});
//#API METHODS END
module.exports = router;