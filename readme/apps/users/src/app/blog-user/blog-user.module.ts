import { Module } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository';
// ! избегать циклических зависимостей !
@Module({
  imports: [], // массив, который хранит в себе названия экземпляров классов, которые являются зависимостей от этого модуля
  providers: [BlogUserMemoryRepository],
  exports: [BlogUserMemoryRepository],
})
export class BlogUserModule {}
