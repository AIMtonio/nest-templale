import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'task'})
export class Task{

    //@Column({primary: true, generated: true})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @Column({nullable: true})
    description: string;

}


