import express, { Application, Request, Response } from 'express';
import * as url from 'url';

import router from './routes/cardRoutes.js';
import { all } from './models/cardModel.js';

const app: Application = express();
app.set('view engine', 'ejs');
app.set('views', '/app/views');

app.use(express.static('/app/css'));
app.use(express.static('/app/js'));
app.use(express.json());

app.use('/card', router);

const PORT: number | string = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
    const cards = await all();
    res.render('index', { cards: cards });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
