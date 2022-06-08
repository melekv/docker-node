const express = require('express');

const cardRoutes = require('./routes/cardRoutes.js');
const cardModel = require('./models/cardModel.js');

const app = express();
app.set('view engine', 'ejs');
app.set('views', '/app/src/views');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.json());

app.use('/card', cardRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const cards = await cardModel.all();
    res.render('index', {cards: cards});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
