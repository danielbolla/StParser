import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';
import { isDigit } from './numericLiteralLexer';

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

export function isIdentifierStart(character: string): boolean {
  return isLetter(character) || character === '_';
}

export function isLetter(character: string): boolean {
  return new RegExp('^[a-zA-Z]$').test(character);
}

export function isIdentifierMiddle(character: string): boolean {
  return isIdentifierStart(character) || isDigit(character);
}
