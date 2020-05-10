import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';
import { isIdentifierMiddle } from './identifierLexer';

export default function lexBitstringOperator(lexer: Lexer): IToken | null {

  switch(lexer.current().toUpperCase()) {
    case 'A':
      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'AND' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.AndOperator, 3);

      if (
        lexer.lookAhead(0,8)?.toUpperCase() === 'AND_THEN' &&
        !isIdentifierMiddle(lexer.lookAhead(8))
      ) return lexer.newToken(TokenKind.AndThenOperator, 8);

      return null;

    case 'N':
      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'NOT' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.NotOperator, 3);

      return null;

    case 'O':
      if (
        lexer.lookAhead(0,2)?.toUpperCase() === 'OR' &&
        !isIdentifierMiddle(lexer.lookAhead(2))
      ) return lexer.newToken(TokenKind.OrOperator, 2);

      if (
        lexer.lookAhead(0,7)?.toUpperCase() === 'OR_ELSE' &&
        !isIdentifierMiddle(lexer.lookAhead(7))
      ) return lexer.newToken(TokenKind.OrElseOperator, 7);

      return null;

    case 'X':
      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'XOR' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.XOrOperator, 3);

      return null;

    default:
      return null;
  }
}
