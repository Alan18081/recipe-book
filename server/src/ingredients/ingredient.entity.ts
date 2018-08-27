import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {Recipe} from '../recipes/recipe.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  userId: number;

  @ManyToMany(type => Recipe, recipe => recipe.ingredients )
  recipes: Recipe[]

}