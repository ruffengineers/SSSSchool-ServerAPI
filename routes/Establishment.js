const express = require("express");
const router = express.Router();
const { Establishment } = require("../models");

// for picture START
const path = require("path");
const multer = require("multer");

// Specify the storage for multer
let storage;

if (!storage) {
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
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
  const establishments = await Establishment.findAll();
  res.json(establishments);
});

router.post("/", upload.single("picture"), async (req, res) => {
  try {
    

    const { personName, designation, title, message } = req.body;
    const picture = path.join("dbImages", req.file.filename); // Construct the image path

    // // Save the image path and other data to the database
    const establishment = { personName, designation, title, message, picture };

    await Establishment.create(establishment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



router.put("/",upload.single("picture"), async (req, res) => {
  try {

  

    const { id, personName, designation, title, message } = req.body;
    let picture;
    if (req.file) {
      picture = path.join("dbImages", req.file.filename);
    } 

    const establishment = await Establishment.update(
      { personName, designation, title, message, picture },
      { where: { id } }
    );

    res.status(200).json({ success: true, data: establishment });
  } catch (error) {
    console.error("Error updating establishment:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.delete("/:estId", async (req, res) => {
  const establishmentId = req.params.estId;
  await Establishment.destroy({
    where: { id: establishmentId },
  });
  res.json("Deleted");
});
//#API METHODS END

module.exports = router;
