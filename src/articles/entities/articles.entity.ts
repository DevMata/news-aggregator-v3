import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsersToArticles } from '../../userstoarticles/entities/userstoarticles.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  articleId: string;

  @Column()
  webUrl: string;

  @OneToMany(
    () => UsersToArticles,
    usersToArticles => usersToArticles.article,
  )
  public usersToArticles!: UsersToArticles[];
}
