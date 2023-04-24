import { UserRoleDto } from './dto/UserRole.dto';
import { RoleService } from './../role/role.service';
import { User } from './entities/user.entity';
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly roleService: RoleService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    const role = await this.roleService.findOneRoleByValue('USER');
    user.roles = [role];
    return this.userRepository.save(user);
  }

  async setRole(userRoleDto: UserRoleDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userRoleDto.userId },
      relations: { roles: true },
    });
    const role = await this.roleService.findOneRole(userRoleDto.roleId);

    if (role && user) {
      user.roles.push(role);
      return this.userRepository.save(user);
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  async findAllUser(): Promise<User[]> {
    const users = await this.userRepository.find({
      relations: ['roles'],
    });
    return users;
  }
  async findAllOrders(id: number): Promise<Order[]> {
    const orders = await this.orderRepository.find({
      where: { user: { id: id } },
      relations: [
        'orderStatus',
        'orderLines.pizzaVariation.recipe.ingredients',
        'orderLines.pizzaVariation.additionalIngredients',
        'orderLines.pizzaVariation.size',
        'orderLines.pizzaVariation.doughType',
      ],
    });
    return orders;
  }

  async findOneUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
      relations: ['roles'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID=${id} not found`);
    }
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
      relations: { roles: true },
    });
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID=${id} not found`);
    }
    return this.userRepository.save(user);
  }

  async removeUser(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID=${id} not found`);
    }
    return this.userRepository.remove(user);
  }

  async removeRole(userRoleDto: UserRoleDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userRoleDto.userId },
      relations: { roles: true },
    });

    const role = await this.roleService.findOneRole(userRoleDto.roleId);
    if (role && user) {
      user.roles = user.roles.filter((r) => r.id !== role.id);
      return this.userRepository.save(user);
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }
}
