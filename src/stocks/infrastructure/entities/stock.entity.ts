import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    public id: string;
    @Column()
    public name: string;
    @Column()
    public description: string;
    @Column()
    public price: number;
}
