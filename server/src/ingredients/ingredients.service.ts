import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Ingredient} from './ingredient.entity';
import {AddIngredientDto} from './dto/add-ingredient.dto';

@Injectable()
export class IngredientsService {

  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientsRepository: Repository<Ingredient>,
  ) {}

  async findAll(userId: number): Promise<Ingredient[]> {
    return await this.ingredientsRepository.find({ userId });
  }

  async addIngredient(ingredientInfo: AddIngredientDto, id: number): Promise<Ingredient> {
    const newIngredient = {
      ...new Ingredient(),
      ...ingredientInfo,
      userId: id
    };
    return await this.ingredientsRepository.save(newIngredient);
  }
}