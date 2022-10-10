const path = require('path');
const fs = require('fs')
const router = require('express').Router();
// const {notes} = require('../../db/db.json')

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"))
})

router.get('/notes/:id', (req,res) => {
    const notesbyid = findById(req.params.id, notes)
    if (notesbyid) {
        res.json(notesbyid)
    } else {
        console.log("id not found")
        res.send(404);
    }
})

router.post('/notes',(req, res) =>{

    let notespost = JSON.parse(fs.readFileSync(
    path.join(__dirname, "../../db/db.json"), "utf8"));
  req.body.id = notespost.length.toSring();

  notesInFile.push(req.body);
  fs.writeFileSync("db/db.json", JSON.stringify(notesInFile));
    res.json(notesInFile);
})

// router.delete('notes/id', (req,res) =>{

// })

module.exports = router;