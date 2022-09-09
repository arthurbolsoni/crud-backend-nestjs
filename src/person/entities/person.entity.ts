import { Address } from 'src/address/entities/address.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { personType } from '../enum/person.enum';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column({ unique: true })
  @Column()
  IdCard: string;

  @Column('int')
  personType: personType;

  @Column()
  birthday: Date;

  @Column()
  address: string;

  constructor(partial: Partial<Person>) {
    Object.assign(this, partial);
  }
}
