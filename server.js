const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv/config');
const cardController = require('./controllers/CardController');

const app = express();
const port = process.env.PORT || 3002;
const uploadFolder = './public/resumes'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));

const createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
}

createFolder(uploadFolder)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage});

app.get('/', (req, res) => {
    res.send('this is the home')
});

app.post('/upload', upload.single('files'), (req, res) => {
    res.send({'rest_code': 0});
})

cardController(app);

// Connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    // {useUnifiedTopology: true},
    () => console.log('connected!')
);


app.listen(port, () => console.log(`Listening on port ${port}`));