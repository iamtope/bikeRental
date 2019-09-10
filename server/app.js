const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



dotenv.config();
const app = express();


// const userRoutes = require('./routes/apis/user');
// app.use('/api/user', userRoutes);

const db = require('./config/db').database

app.use('/uploads', express.static('uploads'));

// database connection

mongoose.connect(db, { 
    useNewUrlParser: true
})
.then(() => {
    console.log('Database Connected Successfully')
})
.catch((err) => {
    console.log('Unable to connect with the database', err)
});

// Defining the port

const port = process.env.PORT || 4000;

//initialize cors middleware
app.use(cors());

// initialize BodyParser middleware
app.use(bodyParser.json());

// Initialize Public Directory

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.get('/', (req,res) => {
    res.send('Hello world')
});




const postRoutes = require('./routes/apis/post');
const userRoutes = require('./routes/apis/user');


app.use('/api/posts', postRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log('server Started on Port', port)
})

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
//   });
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
	next();
  });