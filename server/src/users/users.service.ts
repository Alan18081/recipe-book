import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/createUser.dto';
import {User} from './user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {PasswordService} from '../core/password.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly passwordService: PasswordService
  ) {}

  findOneById(id: string | number) {
    return this.usersRepository.findOne(id);
  }

  async findAll() {
    return await this.usersRepository.find({});
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ email });
  }

  async createUser(userInfo: CreateUserDto): Promise<User> {
    const password = await this.passwordService.generatePassword(userInfo.password);
    const newUser = {
      ...new User(),
      ...userInfo,
      password
    };
    return await this.usersRepository.save(newUser);
  }
}