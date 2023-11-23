import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libros')
export class Libro extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column({
    type: 'text',
    nullable: true, // persmite vacios
  })
  edicion: string;

  @Column('int', {
    default: 0,
    nullable: false,
  })
  anio: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  detalle: string;
}
