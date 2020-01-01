import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HashHelper } from 'src/common/hash.helper';
import { ArticlesModule } from '../articles/articles.module';
import { UsersToArticlesModule } from '../users_to_articles/userstoarticles.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ArticlesModule, UsersToArticlesModule],
  providers: [UsersService, HashHelper],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
