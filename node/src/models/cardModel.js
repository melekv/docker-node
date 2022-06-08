const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) throw err;
    console.log('DB connected...');
});

const all = async () => {
    const result = await db.promise().query('SELECT * FROM cards');

    return result[0];
};

const find = async (id) => {
    const [result] = await db.promise().execute(
        'SELECT * FROM cards WHERE id = ? LIMIT 1',
        [id]
    );

    return result[0];
};

const add = (body) => {
    db.execute(
        'INSERT INTO cards(name, surname, active) VALUES(?, ?, ?)',
        [body.name, body.surname, body.isActive],
        err => {
            if (err) throw err;
        }
    );
};

const update = (id, body) => {
    console.log(id);
    console.log(body);
    db.execute(
        'UPDATE cards SET name = ?, surname = ?, active = ? WHERE id = ?',
        [body.name, body.surname, body.isActive, id],
        err => {
            if (err) throw err;
        }
    );
};

const remove = (id) => {
    console.log(id);
    const sql = 'DELETE FROM cards WHERE id = ?';
    db.execute(sql, [id]);
};

module.exports = {
    all, find, add, remove, update
};
