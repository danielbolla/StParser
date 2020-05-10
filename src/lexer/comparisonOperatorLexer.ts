import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';

export default function lexComparisonOperator(lexer: Lexer): IToken | null {

  switch(lexer.current().toUpperCase()) {
    case '=':
      return lexer.newToken(TokenKind.EqualOperator);

    case '>':
      if (lexer.lookAhead() === '=') return lexer.newToken(TokenKind.GreaterEqualOperator, 2);
      return lexer.newToken(TokenKind.GreaterThanOperator);

    case '<':
      if (lexer.lookAhead() === '=') return lexer.newToken(TokenKind.LessEqualOperator, 2);
      if (lexer.lookAhead() === '>') return lexer.newToken(TokenKind.NotEqualOperator,2);
      return lexer.newToken(TokenKind.LessThanOperator);

    default:
      return null;
  }
}
