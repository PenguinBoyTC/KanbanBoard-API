const fs = require('fs');
const multer = require('multer');
const uploadFolder = './public/assets/uploads/resumes'
const createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.replace(' ', '_'))
    }
})
const upload = multer({storage: storage});

module.exports = function (app) {
    createFolder(uploadFolder)
    app.post('/upload', upload.single('files'), (req, res) => {
        res.send({filename: req.file.filename});
    })
}





