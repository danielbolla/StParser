import IToken from './token';
import TokenKind from './tokenKind';
import lexIdentifier from './identifierLexer';

export default class Lexer {
  public  index = 0;

  constructor(public code: string) {}

  current = (): string => this.code[this.index];
  lookAhead = (offset: number): string => this.code[this.index + offset];

  lex(): IToken[] {
    const tokens: IToken[] = [];

    while(this.index < this.code.length) {
      tokens.push(this.getNextToken());
      //console.log(`${token.index} \x1b[36m<${TokenKind[token.kind]}>\x1b[0m \x1b[33m'${token.code}'\x1b[0m => \x1b[33m${JSON.stringify(token.value)}\x1b[0m`);
    }

    return tokens;
  }

  getNextToken(): IToken {
    let token: IToken | null = null;

    if(token = lexIdentifier(this)) return token;
    else {
      return {
        code: this.current(),
        kind: TokenKind.InvalidToken,
        index: this.index++,
        value: null
      };
    }
  }
}
