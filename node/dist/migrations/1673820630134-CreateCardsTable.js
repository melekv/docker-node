export class CreateCardsTable1673820630134 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS cards (
                id INT(11) AUTO_INCREMENT NOT NULL,
                name VARCHAR(255) NOT NULL,
                surname VARCHAR(255) NOT NULL,
                active TINYINT(1) DEFAULT 1 NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP NULL,
                PRIMARY KEY (id)
            )
            ENGINE = InnoDB
            CHARACTER SET utf8mb4
            COLLATE utf8mb4_unicode_ci;
        `);
    }
    async down(queryRunner) {
    }
}
//# sourceMappingURL=1673820630134-CreateCardsTable.js.map