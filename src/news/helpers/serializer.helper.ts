/* eslint-disable @typescript-eslint/camelcase */
/*rule disabled because NYT respond with snake case*/
import { Injectable } from '@nestjs/common';
import { StringHelper } from './string-handler.helper';
import { NewYorkTimeNew } from '../interfaces/NewYorkTime.interface';
import { New } from '../interfaces/New.interface';
import { GuardianNew } from '../interfaces/TheGuardian.interface';
import { NewsApiNew } from '../interfaces/NewsApi.interface';

@Injectable()
export class SerializerHelper {
  constructor(private readonly stringHelper: StringHelper) {}

  SerializeNewYorkNew(newYorkNew: NewYorkTimeNew): New {
    const {
      web_url,
      headline: { main },
      pub_date,
      byline: { original },
    } = newYorkNew;

    return {
      url: web_url,
      publishedAt: pub_date,
      source: 'New York Time',
      title: main,
      author: this.stringHelper.getNewYorkAuthor(original),
    };
  }

  SerializeGuardianNew(guardianNew: GuardianNew): New {
    const { webTitle, webUrl, webPublicationDate, tags } = guardianNew;

    return {
      url: webUrl,
      publishedAt: webPublicationDate,
      source: 'The Guardian',
      title: webTitle,
      author: this.stringHelper.getGuardianContributors(tags),
    };
  }

  SerializeNewsApiNew(newsApiNew: NewsApiNew): New {
    const { source, author, publishedAt, url, title } = newsApiNew;

    return {
      url: url,
      publishedAt: publishedAt,
      source: source.name,
      title: title,
      author: author,
    };
  }
}
