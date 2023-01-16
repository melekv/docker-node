import { Request, Response } from "express";
import { Repository } from "typeorm";
import appDataSource from "../app-data-source.js";
import { Cards } from "../entities/Cards.js";

const find = async (req: Request, res: Response) => {
    const cardsRepository: Repository<Cards> = appDataSource.getRepository(Cards);

    const card: Cards | null = await cardsRepository.findOneBy({
        id: parseInt(req.params.id)
    });

    res.status(200).send(card);
};

const add = async (req: Request, res: Response) => {
    if (!req.body.name)
        res.status(500)
            .send({ error: true, msg: 'Wrong name!' });

    if (!req.body.surname)
        res.status(500)
            .send({ error: true, msg: 'Wrong surname!' });

    const cardsRepository: Repository<Cards> = appDataSource.getRepository(Cards);

    const card: Cards = new Cards();
    card.name = req.body.name;
    card.surname = req.body.surname;
    card.active = req.body.isActive;

    await cardsRepository.save(card);

    res.status(200).send({ error: false, msg: 'Successfully added card! '});
};

const put = async (req: Request, res: Response) => {
    if (!req.body.name) res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname) res.status(500).send({ error: true, msg: 'Wrong surname!' });

    const cardsRepository: Repository<Cards> = appDataSource.getRepository(Cards);

    const card: Cards | null = await cardsRepository.findOneBy({
        id: parseInt(req.params.id)
    });

    if (card === null)
        res.status(500).send({ error: true, msg: 'Card not found!' });

    if (card instanceof Cards) {
        card.name = req.body.name;
        card.surname = req.body.surname;
        card.active = req.body.isActive;

        await cardsRepository.save(card);
    }

    res.status(200).send({ error: false, msg: 'Successfully changed card!'});
};

const remove = async (req: Request, res: Response) => {
    const cardsRepository: Repository<Cards> = appDataSource.getRepository(Cards);

    await cardsRepository.delete(
        parseInt(req.params.id)
    );

    res.status(200).send({error: false, msg: 'Successfully deleted card'});
};

export  {
    add, find, remove, put
};
