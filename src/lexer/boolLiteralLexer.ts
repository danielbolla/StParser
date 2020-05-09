import { isIdentifierMiddle } from './identifierLexer';
import TokenKind from './tokenKind';
import Lexer from './lexer';
import IToken from './token';

export default function lexBoolLiteral(lexer: Lexer): IToken | null {

  if (
    lexer.lookAhead(0,4)?.toUpperCase() === 'TRUE' &&
    !isIdentifierMiddle(lexer.lookAhead(4))
  ) return lexer.newToken(TokenKind.BooleanLiteral, 4, true);

  if (
    lexer.lookAhead(0,5)?.toUpperCase() === 'FALSE' &&
    !isIdentifierMiddle(lexer.lookAhead(5))
  ) return lexer.newToken(TokenKind.BooleanLiteral, 5, false);

  return null;
}
