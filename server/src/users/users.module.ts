import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {CoreModule} from '../core/core.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './user.entity';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}