const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userController = require('./controllers/UserController');
const cardController = require('./controllers/CardController');
const fileUploadController = require('./controllers/FileUploadController');

require('dotenv/config');
const port = process.env.PORT || 3002;

const app = express();
// set middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));

// Home API
app.get('/', (req, res) => {
    res.send('this is the home')
});

// Controller
userController(app);
cardController(app);
fileUploadController(app);

// Connect to MongoDB

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('connected!')
);


app.listen(port, () => console.log(`Listening on port ${port}`));