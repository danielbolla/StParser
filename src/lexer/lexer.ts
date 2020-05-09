import IToken from './token';
import lexOperator from './operatorLexer';
import TokenKind from './tokenKind';
import lexIdentifier from './identifierLexer';

export default class Lexer {
  private index = 0;

  constructor(private code: string) {}

  current = (): string => this.code[this.index];
  lookAhead = (offset: number, length = 1): string => this.code.substr(this.index + offset, length);

  lex(): IToken[] {
    const tokens: IToken[] = [];

    while(this.index < this.code.length) {
      tokens.push(this.getNextToken());
      //console.log(`${token.index} \x1b[36m<${TokenKind[token.kind]}>\x1b[0m \x1b[33m'${token.code}'\x1b[0m => \x1b[33m${JSON.stringify(token.value)}\x1b[0m`);
    }

    return tokens;
  }

  newToken(kind: TokenKind, length = 1, value: any = null): IToken {
    const index = this.index;
    this.index += length;
    return {
      kind,
      index,
      code: this.code.substr(index, length),
      value
    };
  }

  getNextToken(): IToken {
    let token: IToken | null = null;

    if(token = lexOperator(this)) return token;
    else if(token = lexIdentifier(this)) return token;
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
