import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './services/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  getHello() {
    return {data: this.userService.findAll()};
  }
  @Post()
  createUser(@Body() payload: any) {
    return this.userService.createUser(payload);
  }

  @Put(":id")
  updateUser(@Body() payload: any) {
    return this.userService.createUser(payload);
  }

  @Delete(":id")
  deleteUser(@Body() payload: any) {
    return this.userService.createUser(payload);
  }
}
