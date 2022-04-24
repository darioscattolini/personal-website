import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import parse from 'html-react-parser';
import { JSXParsed } from './jsx-parsed';

export class MarkdownContent {
  private html: string;
  private jsx: JSXParsed;

  constructor(content: string) {
    this.html = this.parseMD(content)
    this.jsx = parse(this.html);
  }

  public getHTMLParsed(): string {
    return this.html;
  }

  public getJSXParsed(): JSXParsed {
    return this.jsx;
  }

  private parseMD(content: string): string {
    const html = unified()
      .use(remarkParse)
      // @ts-expect-error
      .use(remarkRehype)
      // @ts-expect-error
      .use(rehypeExternalLinks, {rel: ['nofollow']})
      // @ts-expect-error
      .use(rehypeStringify)
      .processSync(content)
      .toString();

    return html;
  }
}
