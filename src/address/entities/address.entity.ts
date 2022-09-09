import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddressType } from '../enum/address.enum';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CEP: string;

  @Column()
  street: string;

  @Column('int')
  number: number;

  @Column()
  district: string;

  @Column()
  AddressLineTwo: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  addressType: AddressType;

  constructor(partial: Partial<Address>) {
    Object.assign(this, partial);
  }
}
