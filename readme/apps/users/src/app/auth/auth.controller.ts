import { Body, Controller, Post } from '@nestjs/common';
//import { brotliDecompressSync } from 'zlib';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async create(@Body() dto: CreateUserDto) {  // регистрация пользователей
    const newUser = await this.authService.register(dto);
    return newUser;
  }

}
