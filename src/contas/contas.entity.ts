import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from 'src/users/users.entity';

@Entity()
export class Contas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  valor: number;

  @Column()
  status: boolean;

  @ManyToOne(() => User, (user) => user.contas)
  user: User;
}
