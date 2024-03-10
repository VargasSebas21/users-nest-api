import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly appService: AppService,
        private userService: UserService,
      ) {}
    
      @Get()
      async getHello() {
        return {data: await this.userService.findAll()};
      }
      @Post()
      createUser(@Body() payload: any) {
        return this.userService.createUser(payload);
      }
    
      @Put(":id")
      updateUser(@Body() payload: any, @Param()params : any) {
        console.log(params);
        return this.userService.updateUser(payload, params.id);
      }
    
      @Delete(":id")
      deleteUser(@Body() payload: any, @Param()param : any) {
        return this.userService.deleteUser(param.id);
      }
    }



