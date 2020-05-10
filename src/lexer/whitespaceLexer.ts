import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';

export default function lexWhiteSpace(lexer: Lexer): IToken | null {
  let offset = 1;

  if(isWhiteSpace(lexer.current())) {
    while(true) {
      if(!isWhiteSpace(lexer.lookAhead(offset))) break;
      offset++;
    }
    return lexer.newToken(TokenKind.WhitespaceSeparator, offset);
  }

  if(isNewLine(lexer.current())) {
    while(true) {
      if(!isNewLine(lexer.lookAhead(offset))) break;
      offset++;
    }
    return lexer.newToken(TokenKind.NewLineSeparator, offset);
  }

  return null;

}

export function isWhiteSpace(character: string) {
  return (
    character === ' ' ||
    character === '\t'
  );
}

export function isNewLine(character: string) {
  return (
    character === '\r' ||
    character === '\n'
  );
}
