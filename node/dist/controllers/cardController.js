import { all, find, add, remove, update } from '../models/cardModel.js';
const show = async (req, res) => {
    const result = await all();
    res.status(200).send(result);
};
const find1 = async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await find(id);
    res.status(200).send(result);
};
const add1 = (req, res) => {
    if (!req.body.name)
        res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname)
        res.status(500).send({ error: true, msg: 'Wrong surname!' });
    add(req.body);
    res.status(200).send({ error: false, msg: 'Successfully added card! ' });
};
const put = (req, res) => {
    if (!req.body.name)
        res.status(500).send({ error: true, msg: 'Wrong name!' });
    if (!req.body.surname)
        res.status(500).send({ error: true, msg: 'Wrong surname!' });
    update(parseInt(req.params.id), req.body);
    res.status(200).send({ error: false, msg: 'Successfully changed card!' });
};
const remove1 = (req, res) => {
    remove(parseInt(req.params.id));
    res.status(200).send({ error: false, msg: 'Successfully deleted card' });
};
export { show, add1, find1, remove1, put };
//# sourceMappingURL=cardController.js.map