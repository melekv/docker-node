import { DataSource } from 'typeorm';
import { Cards } from './entities/Cards.js';
const appDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Cards],
    migrations: [
        './dist/migrations/*.js'
    ]
});
appDataSource.initialize()
    .then(() => {
    console.log('Data source is initialized');
})
    .catch((err) => {
    console.error('initialize err', err);
});
export default appDataSource;
//# sourceMappingURL=app-data-source.js.map