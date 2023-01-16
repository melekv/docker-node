import express, { Application, Request, Response } from 'express';
import appDataSource from './app-data-source.js';
import { Cards } from "./entities/Cards.js";

import router from './routes/cardRoutes.js';

const app: Application = express();
app.set('view engine', 'ejs');
app.set('views', '/app/views');

app.use(express.static('/app/css'));
app.use(express.static('/app/js'));
app.use(express.json());

app.use('/card', router);

const PORT: number | string = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
    const cards = await appDataSource.manager.find(Cards);

    res.render('index', { cards: cards });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
