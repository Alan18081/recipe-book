import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Recipe} from './recipe.entity';
import {AddRecipeDto} from './dto/add-recipe.dto';
import { Ingredient } from '../ingredients/ingredient.entity';

@Injectable()
export class RecipesService {

  constructor(
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>,
    @InjectRepository(Ingredient)
    private readonly ingredientsRepository: Repository<Ingredient>
  ) {}

  async findAll(userId: number): Promise<Recipe[]> {
    return this.recipesRepository
      .createQueryBuilder('recipe')
      .where('recipe.userId = :userId', {userId})
      .leftJoinAndSelect('recipe.ingredients', 'ingredient')
      .getMany()
  }

  async addRecipe(recipeInfo: AddRecipeDto, userId: number): Promise<Recipe> {
    const newRecipe = {
      ...new Recipe(),
      ...recipeInfo,
      userId
    };

    const ingredients = recipeInfo.ingredients;
    const ingredientsEntities = ingredients.map(ing => ({
      ...new Ingredient(),
      ...ing,
      userId
    }));
    await Promise.all(ingredientsEntities.map(ing => this.ingredientsRepository.save(ing)));
    newRecipe.ingredients = ingredientsEntities;
    return await this.recipesRepository.save(newRecipe);
  }

  async updateRecipe(recipeId: number, recipeInfo: AddRecipeDto): Promise<Recipe> {
    await this.recipesRepository.update(
      recipeId,
      {
        ...recipeInfo
      }
    );
    return await this.recipesRepository.findOne(recipeId);
  }

  async removeRecipe(id: number) {
    await this.recipesRepository.delete(id);
  }

}