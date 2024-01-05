const express = require("express");
const router = express.Router();
const { Infrastructure } = require("../models")
// for picture START
const path = require("path");
const multer = require("multer");

// Specify the storage for multer
let storage;

if (!storage) {
  storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "../client/public/dbImages");
      // This is actual folder path in client side
      //(NOTE: In post method it should be the relative path where you gonna use to show images (files))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
}
const upload = multer({ storage: storage });
// for picture END


//#API METHODS START
router.get("/", async (req, res) => {
const rows = await Infrastructure.findAll({
    order: [['id', 'DESC']] // Order by 'id' in descending order
  });
res.json(rows);
});

router.post("/", upload.single("picture"),  async (req, res) => {
try {
 const { insfrastcategoryid  } = req.body;
const picture = path.join("dbImages", req.file.filename); // Construct the image path
const row = { insfrastcategoryid ,picture  };
await Infrastructure.create(row);
res.status(200).json({success: true, message: 'Data saved successfully.' });
 } catch (error) {
console.error(error);
res.status(500).json({ message: "Internal Server Error" });
}
        });

router.put("/", upload.single("picture"),  async (req, res) => {
try {
 const {id, insfrastcategoryid  } = req.body;
 let picture;
 if (req.file) {
picture = path.join("dbImages", req.file.filename); // Construct the image path
}

await Infrastructure.update(
{insfrastcategoryid ,picture },
{ where: { id } }
  );
 res.status(200).json({ success: true, message: 'Data updated successfully.' });
} catch (error) {
console.error("Error updating establishment: ", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });

            }
        });

router.delete("/:keyId", async (req, res) => {
 const rowId = req.params.keyId;
 await Infrastructure.destroy({
where: { id: rowId },
});
res.json("Deleted");
});
//#API METHODS END
module.exports = router;