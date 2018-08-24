import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Recipe} from './recipe.entity';
import {AddRecipeDto} from './dto/add-recipe.dto';

@Injectable()
export class RecipesService {

  constructor(
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>
  ) {}

  async findAll(userId: number): Promise<Recipe[]> {
    return this.recipesRepository.find({ userId })
  }

  async addRecipe(recipeInfo: AddRecipeDto, userId: number): Promise<Recipe> {
    const newRecipe = {
      ...new Recipe(),
      ...recipeInfo,
      userId
    };
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