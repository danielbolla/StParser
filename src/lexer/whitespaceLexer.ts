import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';

export default function lexWhiteSpace(lexer: Lexer): IToken | null {
  if(!isWhiteSpace(lexer.current())) return null;

  let offset = 1;
  while(true) {
    if(!isWhiteSpace(lexer.lookAhead(offset))) break;
    offset++;
  }
  return lexer.newToken(TokenKind.WhitespaceSeparator, offset);
}

export function isWhiteSpace(character: string) {
  return (
    character === ' ' ||
    character === '\t' ||
    character === '\r' ||
    character === '\n'
  );
}

export function isNewLine(character: string) {
  return (
    character === '\r' ||
    character === '\n'
  );
}
