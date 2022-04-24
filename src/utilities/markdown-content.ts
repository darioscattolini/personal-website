import { micromark } from 'micromark';
import parse from 'html-react-parser';
import { JSXParsed } from './jsx-parsed';

export class MarkdownContent {
  private html: string;
  private jsx: JSXParsed;

  constructor(content: string) {
    this.html = micromark(content);
    this.jsx = parse(this.html);
  }

  public getHTMLParsed(): string {
    return this.html;
  }

  public getJSXParsed(): JSXParsed {
    return this.jsx;
  }
}
