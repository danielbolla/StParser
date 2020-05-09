import IToken from './token';
import Lexer from './lexer';
import { isDigit } from './numericLiteralLexer';
import TokenKind from './tokenKind';

export default function lexTimeOfDayLiteral(lexer: Lexer): IToken | null {

  if (
    lexer.lookAhead(0,12)?.toUpperCase() !== 'TIME_OF_DAY#' &&
    lexer.lookAhead(0,4)?.toUpperCase() !== 'TOD#' &&
    lexer.lookAhead(0,13)?.toUpperCase() !== 'LTIME_OF_DAY#' &&
    lexer.lookAhead(0,5)?.toUpperCase() !== 'LTOD#'
  ) return null;

  let offset =
    lexer.lookAhead(0,12)?.toUpperCase() === 'TIME_OF_DAY#' ? 12 :
    lexer.lookAhead(0,4)?.toUpperCase() === 'TOD#' ? 4 :
    lexer.lookAhead(0,13)?.toUpperCase() !== 'LTIME_OF_DAY#' ? 13: 5;

  let timeString = '';
  while(
    isDigit(lexer.lookAhead(offset)) ||
    lexer.lookAhead(offset) === ':' ||
    lexer.lookAhead(offset) === '.'
  ) {
    timeString += lexer.lookAhead(offset++);
  }

  const [hourStr, minuteStr, secondStr, ...rest] = timeString.split(/\:/g);
  if(rest.length) return lexer.newToken(TokenKind.InvalidToken, offset);
  const hour = parseInt(hourStr);
  if(isNaN(hour) || hour < 0 || hour > 24) return lexer.newToken(TokenKind.InvalidToken, offset);
  const minute = parseInt(minuteStr);
  if(isNaN(minute) || minute < 0 || minute > 60) return lexer.newToken(TokenKind.InvalidToken, offset);
  const second = parseFloat(secondStr);
  if(isNaN(second) || second < 0 || second > 60) return lexer.newToken(TokenKind.InvalidToken, offset);
  const time = Math.floor(((hour * 60 + minute) * 60 + second) * 1000000);
  return lexer.newToken(TokenKind.TimeOfDateLiteral, offset, time);
}
