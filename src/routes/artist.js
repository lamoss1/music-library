const express = require("express");
const { route } = require("../app");

const artistController = require("../controllers/artist");

const router = express.Router();

router.post("/", artistController.createArtist);

router.get("/", artistController.getAllArtists);

router.get("/:id", artistController.getArtistbyId);

router.put("/:id", artistController.putArtist);

router.patch("/:id", artistController.putArtist);

router.delete("/:id", artistController.deleteArtist);

module.exports = router;
