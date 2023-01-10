const cardModel = require('../models/cardModel.js');

const show = async (req, res) => {
    const result = await cardModel.all();

    res.status(200).send(result);
};

const find = async (req, res) => {
    const id = req.params.id;
    const result = await cardModel.find(id);

    res.status(200).send(result);
};

const add = (req, res) => {
    if (!req.body.name) res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname) res.status(500).send({ error: true, msg: 'Wrong surname!' });

    cardModel.add(req.body);

    res.status(200).send({ error: false, msg: 'Successfully added card! '});
};

const put = (req, res) => {
    if (!req.body.name) res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname) res.status(500).send({ error: true, msg: 'Wrong surname!' });

    cardModel.update(req.params.id, req.body);

    res.status(200).send({ error: false, msg: 'Successfully changed card!'});
};

const remove = (req, res) => {
    cardModel.remove(req.params.id);
    res.status(200).send({error: false, msg: 'Successfully deleted card'});
};

export {
    show, add, find, remove, put
};
