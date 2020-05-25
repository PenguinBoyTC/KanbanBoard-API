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
            resume: req.body.resume,
        });
        try {
            const saveCard = await card.save();
            res.json({saveCard: saveCard});
        } catch (err) {
            res.json({message: err})
        }
    })

    app.patch('/card/rates/:id', async (req, res) => {
        const updateBody = {}
        if (req.body.phoneScreenRate != undefined) {
            // console.log('phoneScreenRate', req.body.phoneScreenRate)
            updateBody.phoneScreenRate = req.body.phoneScreenRate
        }
        if (req.body.onsiteRate != undefined) {
            // console.log('onsiteRate', req.body.onsiteRate)
            updateBody.onsiteRate = req.body.onsiteRate
        }
        if (req.body.behaviorRate != undefined) {
            // console.log('behaviorRate', req.body.behaviorRate)
            updateBody.behaviorRate = req.body.behaviorRate
        }
        if (req.body.averageRate != undefined) {
            // console.log('averageRate', req.body.averageRate)
            updateBody.averageRate = req.body.averageRate
        }
        try {
            const updateCard = await CardModel.updateOne(
                {_id: req.params.id},
                {$set: updateBody}
            );
            res.json({updateCard: updateCard});
        } catch (err) {
            res.json({message: err})
        }
    })

    app.delete('/card/:id', async (req, res) => {
        try {
            const removedCard = await CardModel.deleteOne({_id: req.params.id});
            res.json({removedCard: removedCard});
        } catch (err) {
            res.json({message: err});
        }
    })
    app.patch('/card/:id', async (req, res) => {
        try {
            const updateCard = await CardModel.updateOne(
                {_id: req.params.id},
                {$set: {status: req.body.status,}}
            );
            res.json({updateCard: updateCard});
        } catch (err) {
            res.json({message: err});
        }
    })
}