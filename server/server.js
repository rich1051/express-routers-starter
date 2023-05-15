const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
// const bookList = [];
// const movieList = [];

// line 1/2 for book:
const bookRouter = require('./routes/bookRouter');

// line 1/2 for movie:
const movieRouter = require('./routes/movieRouter');


// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// line 2/2 for book:
app.use('/book', bookRouter);
// TODO - Move these routes to their own modules!
// app.get('/book', (req, res) => {
//     res.send(bookList);
// });

// app.post('/book', (req, res) => {
//     bookList.push(req.body);
//     res.sendStatus(200);
// });

// line 2/2 for movie:
app.use('/movie', movieRouter);
// app.get('/movie', (req, res) => {
//   res.send(movieList);
// });

// app.post('/movie', (req, res) => {
//   movieList.push(req.body);
//   res.sendStatus(200);
// });
