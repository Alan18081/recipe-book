import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RecipesController} from './recipes.controller';
import {RecipesService} from './recipes.service';
import {Recipe} from './recipe.entity';
import {Ingredient} from '../ingredients/ingredient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe, Ingredient])
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesService]
})
export class RecipesModule {}