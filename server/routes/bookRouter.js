// boilerplate:
let express = require('express');

// boilerplate:
let router = express.Router();

let bookList = [];

// app will become router:
// remove "book" from URL:
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;
