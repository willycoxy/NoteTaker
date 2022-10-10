const path = require('path');
const fs = require('fs')
const router = require('express').Router();
// const {notes} = require('../../db/db.json')

// router.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../db/db.json"))
// })


router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"));
    
  });

  router.get("/notes/:id", (req, res) => {
    let notesById = JSON.parse(fs.readFileSync("../../db/db.json", "utf8"))
    res.json(notesById[Number(req.params.id)]);
    
  });

// router.get('/notes/:id', (req,res) => {
//     const notesbyid = findById(req.params.id, notes)
//     if (notesbyid) {
//         res.json(notesbyid)
//     } else {
//         console.log("id not found")
//         res.send(404);
//     }
// })

router.post("/notes", (req, res) => {
    let notespost = JSON.parse(fs.readFileSync(
        path.join(__dirname, "../../db/db.json"), "utf8"));
    req.body.id = notespost.length.toString();
    notespost.push(req.body);
    fs.writeFileSync("db/db.json", JSON.stringify(notespost));
      res.json(notespost);
  });
// router.post('/notes',(req, res) =>{

//     let notespost = JSON.parse(fs.readFileSync(
//     path.join(__dirname, "../../db/db.json"), "utf8"));
//   req.body.id = notespost.length.toSring();

//   notespost.push(req.body);
//   fs.writeFileSync("db/db.json", JSON.stringify(notespost));
//     res.json(notespost);
// })

// router.delete('notes/id', (req,res) =>{

// })

module.exports = router;