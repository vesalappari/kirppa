import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Post('users/create')
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.appService.createUser(name, email, password);
  }

  @Post('users/delete')
  deleteUser(@Body('id') id: string): Promise<void> {
    return this.appService.deleteUser(id);
  }
}
