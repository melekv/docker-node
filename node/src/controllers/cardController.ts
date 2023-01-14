import { all, find, add, remove, update } from '../models/cardModel.js';
import { Request, Response } from "express";

const show = async (req: Request, res: Response) => {
    const result = await all();

    res.status(200).send(result);
};

const find1 = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const result = await find(id);

    res.status(200).send(result);
};

const add1 = (req: Request, res: Response) => {
    if (!req.body.name) res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname) res.status(500).send({ error: true, msg: 'Wrong surname!' });

    add(req.body);

    res.status(200).send({ error: false, msg: 'Successfully added card! '});
};

const put = (req: Request, res: Response) => {
    if (!req.body.name) res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname) res.status(500).send({ error: true, msg: 'Wrong surname!' });

    update(parseInt(req.params.id), req.body);

    res.status(200).send({ error: false, msg: 'Successfully changed card!'});
};

const remove1 = (req: Request, res: Response) => {
    remove(parseInt(req.params.id));
    res.status(200).send({error: false, msg: 'Successfully deleted card'});
};

export  {
    show, add1, find1, remove1, put
};
