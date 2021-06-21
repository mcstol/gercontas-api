import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class bills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  value: string;
}
