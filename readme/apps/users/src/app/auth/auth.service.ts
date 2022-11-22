import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@readme/shared-types';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { BlogUserEntity } from '../blog-user/blog-user.entity';

@Injectable()
export class AuthService {

  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {}

  async register(dto: CreateUserDto) {
    const {email, firstName, lastName, password} = dto;
    const blogUser: User = {
      email,
      firstName,
      lastName,
      avatar: '',
      passwordHash: '',
      _id: ''
    }

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new Error('User alredy exists');
    }

    const userEntity = new BlogUserEntity(blogUser)
    await userEntity.setPassword(password);

    return this.blogUserRepository.create(userEntity);

  }

}
