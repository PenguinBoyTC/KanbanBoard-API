const CardModel = require('../models/CardModel');
module.exports = function (app) {
    app.get('/card/:id', async (req, res) => {
        try {
            const card = await CardModel.findById(req.params.id);
            res.json({card: card});
        } catch (err) {
            res.json({message: err});
        }

    })
    app.get('/cardlist', async (req, res) => {
        try {
            const cardList = await CardModel.find();
            res.json({cardList: cardList});
        } catch (err) {
            res.json({message: err});
        }
    });

    app.post('/card', async (req, res) => {
        const card = new CardModel({
            name: req.body.name,
            education: req.body.education,
            phone: req.body.phone,
            email: req.body.email,
            status: req.body.status,
            comment: req.body.comment,
        });
        try {
            const saveCard = await card.save();
            res.json({saveCard: saveCard});
        } catch (err) {
            res.json({message: err})
        }
    })
    app.delete('/card/:id', async (req, res) => {
        try {
            const removedCard = await CardModel.remove({_id: req.params.id});
            res.json({removedCard: removedCard});
        } catch (err) {
            res.json({message: err});
        }
    })
}