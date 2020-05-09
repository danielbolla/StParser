import IToken from './token';
import Lexer from './lexer';
import { isDigit } from './numericLiteralLexer';
import TokenKind from './tokenKind';

export default function lexDateLiteral(lexer: Lexer): IToken | null {

  if (
    lexer.lookAhead(0,5)?.toUpperCase() !== 'DATE#' &&
    lexer.lookAhead(0,2)?.toUpperCase() !== 'D#' &&
    lexer.lookAhead(0,6)?.toUpperCase() !== 'LDATE#' &&
    lexer.lookAhead(0,3)?.toUpperCase() !== 'LD#'
  ) return null;

  let offset =
    lexer.lookAhead(0,5)?.toUpperCase() === 'DATE#' ? 5 :
    lexer.lookAhead(0,2)?.toUpperCase() === 'D#' ? 2 :
    lexer.lookAhead(0,6)?.toUpperCase() !== 'LDATE#' ? 6: 3;

  let dateString = '';
  let dashCounter = 0;
  while(
    isDigit(lexer.lookAhead(offset)) ||
    lexer.lookAhead(offset) === '-' ||
    lexer.lookAhead(offset) === ':' ||
    lexer.lookAhead(offset) === '.'
  ) {
    if(lexer.lookAhead(offset) === '-') {
      dashCounter++;
      if(dashCounter === 3) dateString += 'T';
      else  dateString += '-';
    }
    else dateString += lexer.lookAhead(offset);
    offset++;
  }

  try {
    const date = new Date(dateString + 'Z');
    return lexer.newToken(TokenKind.DateLiteral, offset, date);
  }
  catch (error) {
    return lexer.newToken(TokenKind.InvalidToken, offset);
  }
}
