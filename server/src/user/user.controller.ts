import { UserRoleDto } from './dto/UserRole.dto';
import { User } from './entities/user.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger/dist';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @ApiOperation({ summary: 'Создание пользователя' })
  // @ApiResponse({ status: 200, type: User })
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.createUser(createUserDto);
  // }

  @ApiOperation({ summary: 'Добавление роли' })
  @ApiResponse({ status: 200, type: User })
  @Post('/role')
  setRoles(@Body() dto: UserRoleDto) {
    return this.userService.setRole(dto);
  }

  @ApiOperation({ summary: 'Получение пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @ApiBearerAuth()
  // @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  findAll() {}

  @ApiOperation({ summary: 'Получение пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneUser(+id);
  }

  @ApiOperation({ summary: 'Получение заказов пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id/order')
  findAllOrder(@Param('id') id: string) {
    return this.userService.findAllOrders(+id);
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
