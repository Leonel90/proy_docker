import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column(
        'text'
    )
    nombre: string;

    @Column({
        type: 'text',
        nullable: true // persmite vacios
    })
    edicion: string;

    @Column('int',{
        default: 0,
        nullable: false
    })
    anio: number;

}
