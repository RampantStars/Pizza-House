import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { Role } from './entities/role.entity';

@ApiTags('Роль')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: 'Получение всех ролей' })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  findAll() {
    return this.roleService.findAllRole();
  }

  @ApiOperation({ summary: 'Получение роли' })
  @ApiResponse({ status: 200, type: Role })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOneRole(+id);
  }
  @ApiOperation({ summary: 'Обновление роли' })
  @ApiResponse({ status: 200, type: Role })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.updateRole(+id, updateRoleDto);
  }
  @ApiOperation({ summary: 'Обновление роли' })
  @ApiResponse({ status: 200, type: Role })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.removeRole(+id);
  }
}
