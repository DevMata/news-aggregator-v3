import { Module, HttpModule } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { StringHelper } from './helpers/string-handler.helper';
import { SerializerHelper } from './helpers/serializer.helper';
import { NewsConstants } from './news.constants';

@Module({
  controllers: [NewsController],
  imports: [HttpModule],
  providers: [
    NewsService,
    StringHelper,
    SerializerHelper,
    {
      provide: 'Consts',
      useValue: NewsConstants,
    },
  ],
})
export class NewsModule {}
