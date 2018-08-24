import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {Ingredient} from './ingredient.entity';
import {AddIngredientDto} from './dto/add-ingredient.dto';
import {IngredientsService} from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {

  constructor(
    private readonly ingredientsService: IngredientsService
  ) {}

  @Get()
  async findAll(@Req() req): Promise<Ingredient[]> {
    return await this.ingredientsService.findAll(req.user.id);
  }

  @Post()
  async addIngredient(
    @Body() ingredientInfo: AddIngredientDto,
    @Req() req
  ): Promise<Ingredient> {
    return await this.ingredientsService.addIngredient(ingredientInfo, req.user.id);
  }
}