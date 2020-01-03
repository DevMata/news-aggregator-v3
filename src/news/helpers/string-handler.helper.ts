import { Injectable } from '@nestjs/common';

@Injectable()
export class StringHelper {
  private readonly newYorkAuthorRegex = /^(By )(?<author>[\w\.\,\- ]+)$/;

  getNewYorkAuthor(original: string): string {
    const regexExec = this.newYorkAuthorRegex.exec(original);

    if (regexExec && regexExec.groups && regexExec.groups.author) {
      return regexExec.groups.author;
    } else {
      return null;
    }
  }

  getGuardianContributors(tags: { webTitle: string }[]): string {
    return tags.map(tag => tag.webTitle).join(', ');
  }
}
