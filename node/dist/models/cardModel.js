import mysql from 'mysql2';
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    //port: process.env.DB_PORT
});
db.connect(err => {
    if (err)
        throw err;
    console.log('DB connected...');
});
const all = async () => {
    const result = await db.promise().query('SELECT * FROM cards');
    return result[0];
};
export { all };
//# sourceMappingURL=cardModel.js.map