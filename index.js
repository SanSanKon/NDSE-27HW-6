const express = require('express');
const app = express();
const booksRouter = require('./routes/booksRouter');
const userLoginRouter = require('./routes/userLoginRouter');
const routesIndex = require('./routes/routesIndex');
const errorMiddleware = require('./middleware/error');
const path = require('path');

//View engine setup
app.set('view engine', 'ejs');

//App cofiguration
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', routesIndex);
app.use('/api', userLoginRouter);
app.use('/books', booksRouter); 
//app.use('/api/books', booksRouter);
// app.use('/booksfilesuploads', express.static(__dirname, '/booksfilesuploads'));

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`); 
});

//Previous versions of requests

// app.post('/api/user/login', (req, res) => {
//     //const {id, mail} = req.body;

//     const newUserLogin = new UserLogin(1, "test@mail.ru");
//     res.status(201);
//     res.json(newUserLogin);
//     //res.json({ id: 1, mail: "test@mail.ru" });
// });

// app.get('/api/books', (req, res) => {
//     const {book} = library;
//     res.json(book); 
// });

// app.get('/api/books/:id', (req, res) => {
//     const {book} = library;
//     const {id} = req.params;
//     const index = book.findIndex(el => el.id === id);

//     if(index !== -1) {
//         res.json(book[index]);
//     } else {
//         res.status(404);
//         res.json('404');
//     }
// });

// app.post('/api/books', (req, res) => {
//     const {book} = library;
//     const {id, title, description, authors, favorite, fileCover, fileName} = req.body;
    
//     const newBook = new Book(id, title, description, authors, favorite, fileCover, fileName);
//     book.push(newBook);

//     res.status(201);
//     res.json(newBook);
// });

// app.put('/api/books/:id', (req, res) => {
//     const {book} = library;
//     const {title, description, authors, favorite, fileCover, fileName} = req.body;
//     const {id} = req.params;
//     const index = book.findIndex(el => el.id === id);

//     if(index !== -1) {
//         book[index] = {
//             ...book[index],
//             title, 
//             description, 
//             authors, 
//             favorite, 
//             fileCover, 
//             fileName
//         }
//         res.json(book[index])
//     } else {
//         res.status(404);
//         res.json('404 | Record not found');
//     }
// });

// app.delete('/api/books/:id', (req, res) => {
//     const {book} = library;
//     const {id} = req.params;
//     const index = book.findIndex(el => el.id === id);

//     if(index !== -1) {
//         book.splice(index, 1);
//         res.json('ok')
//     } else {
//         res.status(404);
//         req.json('404 | Book not found')
//     }
// });