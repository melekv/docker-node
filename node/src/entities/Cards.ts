import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cards {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    name: string = '';

    @Column()
    surname: string = '';

    @Column()
    active: boolean = false;

    @Column()
    created_at: Date = new Date();

    @Column()
    updated_at: Date = new Date();
}
