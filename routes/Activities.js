const express = require("express");
const router = express.Router();
const { Activities } = require("../models")


//#API METHODS START
router.get("/", async (req, res) => {
const rows = await Activities.findAll({
    order: [['id', 'DESC']] // Order by 'id' in descending order
  });
res.json(rows);
});
router.get("/temp", async (req, res) => {
 
  res.json("Helo World");
  });
router.get('/byActCategoryId/:actCategoryId', async (req, res) => {
  const actCategoryId = req.params.actCategoryId;
  
  const activityDetail = await Activities.findAll({
    where: {
      ActCategoryId: actCategoryId,
    },
  });
  res.json(activityDetail);
});

router.post("/", async (req, res) => {
const row = req.body;
await Activities.create(row);
res.status(200).json({success: true, message: 'Data saved successfully.' });
});

router.put("/", async (req, res) => {
 const { id, actcategoryid ,activity ,description  } = req.body;
 await Activities.update(
{actcategoryid ,activity ,description },
{ where: { id } }
  );
 res.status(200).json({ success: true, message: 'Data updated successfully.' });
  });

router.delete("/:keyId", async (req, res) => {
 const rowId = req.params.keyId;
 await Activities.destroy({
where: { id: rowId },
});
res.json("Deleted");
});
//#API METHODS END
module.exports = router;