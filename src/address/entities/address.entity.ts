import { Person } from 'src/person/entities/person.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AddressType } from '../enum/address.enum';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  CEP: string;

  @Column()
  street: string;

  @Column('int')
  number: number;

  @Column()
  district: string;

  @Column()
  addressLineTwo: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  addressType: AddressType;

  @ManyToOne(() => Person)
  person: Person;

  constructor(partial: Partial<Address>) {
    Object.assign(this, partial);
  }
}
