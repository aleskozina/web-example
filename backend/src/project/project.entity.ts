import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({'name': 'projects'})
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {nullable: false})
    name: string

    @Column('datetime', {nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    created_at: string

    @Column('datetime', {nullable: false, default: () => 'CURRENT_TIMESTAMP'})
    updated_at: string

    @Column('datetime', {'nullable': true, 'default': null})
    deleted_at: string

}