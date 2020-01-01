import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/articles.entity';
import { ArticlesService } from './articles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
