import { Address } from 'src/address/entities/address.entity';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { personType } from '../enum/person.enum';

@Entity()
export class Person extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //fazer a verificação de cpf e cnpg.
  // @Column({ unique: true })
  @Column()
  IdCard: string;

  @Column('int')
  personType: personType;

  @Column()
  birthday: Date;

  @OneToMany(() => Address, (addresses) => addresses.personId, {eager: true, cascade: true})
  addresses: Address[]
  
  constructor(partial: Partial<Person>) {
    super()
    Object.assign(this, partial);
  }
}