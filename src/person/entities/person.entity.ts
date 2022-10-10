import { Address } from 'src/address/entities/address.entity';
import { Content } from 'src/common/entities/base.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { personType } from '../enum/person.enum';

@Entity()
export class Person extends Content {
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

  @OneToMany(() => Address, (addresses) => addresses.personId, {
    eager: true,
    cascade: true,
  })
  addresses: Address[];

  constructor(partial: Partial<Person>) {
    super();
    Object.assign(this, partial);
  }
}
