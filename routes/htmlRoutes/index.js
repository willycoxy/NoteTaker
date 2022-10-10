const path = require('path');
// const fs = require('fs')
const router = require('express').Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
    console.log("/")
})
;

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"))
    console.log("/notes")
})
;

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
    console.log("*")
})
;
module.exports = router;