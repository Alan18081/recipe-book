import { Module } from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RecipesModule} from './recipes/recipes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    RecipesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
