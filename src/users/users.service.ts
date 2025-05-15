import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(email: string, password: string): Promise<User> {
    const hashed = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({ email, password: hashed });
    return this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> 
  {
   return newFunction();

      function newFunction(): User | PromiseLike<User | undefined> | undefined {
          return this.usersRepository.findOne({ where: { email } });
      }
  }
}