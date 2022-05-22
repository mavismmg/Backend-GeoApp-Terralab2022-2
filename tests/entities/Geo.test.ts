import { Entity, CreateDateColumn, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("locations")
export class Geo {
    @PrimaryColumn()
    id: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    desc: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        };
    };
};