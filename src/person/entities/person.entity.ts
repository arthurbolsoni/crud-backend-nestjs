import { Address } from 'src/address/entities/address.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { personType } from '../enum/person.enum';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  IdCard: string;

  @Column('int')
  personType: personType;

  @Column()
  birthday: Date;

  @OneToMany(() => Address, (addresses) => addresses.person)
  addresses: Address[]

  constructor(partial: Partial<Person>) {
    Object.assign(this, partial);
  }
}
