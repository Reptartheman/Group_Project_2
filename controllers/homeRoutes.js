const router = require("express").Router();
const { Park } = require("../models");
const withAuth = require("../utils/auth");

//find all parks and render to homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const parkData = await Park.findAll({});
    const parks = parkData.map((park) => park.get({ plain: true }));
    console.log(parks)

    res.render("homepage", { layout: "main", parks });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/journal", async (req, res) => {
//   try {
//     const journalData = await Journal.findAll({});
//     const entries = journalData.map((entry) => entry.get({ plain: true }));
//     res.render("journal");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
