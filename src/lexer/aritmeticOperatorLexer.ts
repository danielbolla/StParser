import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';
import { isIdentifierMiddle } from './identifierLexer';

export default function lexArithmeticOperator(lexer: Lexer): IToken | null {

  switch(lexer.current()) {
    case '+':
      return lexer.newToken(TokenKind.AddOperator);

    case '-':
      return lexer.newToken(TokenKind.SubtractOperator);

    case '*':
      return lexer.newToken(TokenKind.MultiplyOperator);

    case '/':
      return lexer.newToken(TokenKind.DivideOperator);

    case 'm':
    case 'M':
      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'MOD' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.ModuloOperator, 3);

      if (
        lexer.lookAhead(0,4)?.toUpperCase() === 'MOVE' &&
        !isIdentifierMiddle(lexer.lookAhead(4))
      ) return lexer.newToken(TokenKind.MoveOperator, 4);

      return null;

    case 's':
    case 'S':
      if (
        lexer.lookAhead(0,6)?.toUpperCase() === 'SIZEOF' &&
        !isIdentifierMiddle(lexer.lookAhead(6))
      ) return lexer.newToken(TokenKind.SizeOfOperator, 6);

      return null;

    default:
      return null;
  }
}
