const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is the home')
});
app.get('/cardlist', (req, res) => {
    res.send([{
        id: 1,
        name: "TC",
        education: "KS",
        number: "12345",
        email: "asdf",
        status: "applied",
        comment: "hello",
    }, {
        id: 2,
        name: "TC2",
        education: "KS",
        number: "12345",
        email: "asdf",
        status: "phoneScreen",
        comment: "hello",
    }, {
        id: 3,
        name: "TC3",
        education: "KS",
        number: "12345",
        email: "asdf",
        status: "onSite",
        comment: "hello",
    }, {
        id: 4,
        name: "TC4",
        education: "KS",
        number: "12345",
        email: "asdf",
        status: "offered",
        comment: "hello",
    }])
});

app.listen(3000, () => console.log('Listening on port 3000'));
