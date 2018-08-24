import {Entity, PrimaryGeneratedColumn, ManyToMany, Column, Index} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  username: string;

  @Index({ unique: true })
  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;
}