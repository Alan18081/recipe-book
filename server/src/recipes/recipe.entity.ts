import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  userId: number;

  @ManyToMany(type => Ingredient, ingredient => ingredient.recipes)
  @JoinTable()
  ingredients: Ingredient[];
}