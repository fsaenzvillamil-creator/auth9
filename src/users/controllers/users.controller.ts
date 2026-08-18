import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Fernando',
        },
        email: {
          type: 'string',
          example: 'fernando@gmail.com',
        },
        password: {
          type: 'string',
          example: '123456',
        },
        isActive: {
          type: 'boolean',
          example: true,
        },
      },
      required: ['name', 'email', 'password'],
    },
  })
  @Post()
  create(@Body() userData: any) {
    return this.usersService.create(userData);
  }
}