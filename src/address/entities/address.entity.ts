import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { addressType } from '../enum/address.enum';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CEP: string;

  @Column()
  logradouro: string;

  @Column('int')
  numero: number;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  tipo: addressType;

  constructor(partial: Partial<Address>) {
    Object.assign(this, partial);
  }
}
