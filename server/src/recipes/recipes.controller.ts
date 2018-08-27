import {Controller, Post, Get, Put, Delete, Body, Req, Param} from '@nestjs/common';
import {RecipesService} from './recipes.service';
import {UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AddRecipeDto} from './dto/add-recipe.dto';
import {Recipe} from './recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  public async findAll(@Req() req) {
    return await this.recipesService.findAll(req.user.id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async addRecipe(@Body() recipeInfo: AddRecipeDto, @Req() req) {
    return await this.recipesService.addRecipe(recipeInfo, req.user.id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateRecipe(
    @Param('id') id,
    @Body() recipeInfo: AddRecipeDto
  ): Promise<Recipe> {
    return await this.recipesService.updateRecipe(+id, recipeInfo);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async removeRecipe( @Param('id') id ){
    return await this.recipesService.removeRecipe(id);
  }
}