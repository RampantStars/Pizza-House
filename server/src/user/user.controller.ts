import { UserRoleDto } from './dto/UserRole.dto';
import { User } from './entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Добавление роли' })
  @ApiResponse({ status: 200, type: User })
  @Post('/role')
  setRoles(@Body() dto: UserRoleDto) {
    return this.userService.setRole(dto);
  }

  @ApiOperation({ summary: 'Получение пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  findAll() {
    return this.userService.findAllUser();
  }

  @ApiOperation({ summary: 'Получение пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneUser(+id);
  }

  @ApiOperation({ summary: 'Изменение пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'Убрать роль' })
  @ApiResponse({ status: 200, type: User })
  @Delete('/role')
  removeRole(@Body() dto: UserRoleDto) {
    return this.userService.removeRole(dto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiResponse({ status: 204, type: User })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
}
