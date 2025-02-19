import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const user = this.usersRepository.create({ name, email, password });
    return this.usersRepository.save(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
