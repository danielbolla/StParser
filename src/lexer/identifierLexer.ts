import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';

export default function lexIdentifier(lexer: Lexer): IToken | null {
  if(!isIdentifierStart(lexer.current())) return null;

  let identifierName = lexer.current();
  let offset = 1;
  while(true) {
    if(!isIdentifierMiddle(lexer.lookAhead(offset))) break;
    identifierName += lexer.lookAhead(offset++);
  }
  return lexer.newToken(TokenKind.Identifier, offset, identifierName);
}

function isIdentifierStart(character: string): boolean {
  return new RegExp('^[a-zA-Z_]$').test(character);
}

export function isIdentifierMiddle(character: string): boolean {
  return new RegExp('^[a-zA-Z_0-9]$').test(character);
}
