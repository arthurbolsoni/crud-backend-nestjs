import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { personType } from '../enum/person.enum';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  // @Column({ unique: true })
  @Column()
  numDocumento: string;

  @Column('int')
  tipo: personType;

  @Column()
  nascimentoData: Date;

  // @Column()
  // address?: string;

  constructor(partial: Partial<Person>) {
    Object.assign(this, partial);
  }
}
