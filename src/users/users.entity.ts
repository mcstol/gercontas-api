import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Contas } from 'src/contas/contas.entity';

@Entity()
export class User {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Contas, (conta) => conta.user)
  conta: Contas[];
}
