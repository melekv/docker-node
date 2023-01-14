import express from 'express';
import * as url from 'url';
import router from './routes/cardRoutes.js';
import { all } from './models/cardModel.js';
const app = express();
app.set('view engine', 'ejs');
app.set('views', '/app/views');
app.use(express.static('/app/css'));
app.use(express.static(url.fileURLToPath(new URL('.', import.meta.url)) + '/js'));
app.use(express.json());
app.use('/card', router);
const PORT = process.env.PORT || 3000;
app.get('/', async (req, res) => {
    const cards = await all();
    res.render('index', { cards: cards });
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//# sourceMappingURL=index.js.map