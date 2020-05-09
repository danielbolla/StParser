import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';

export default function lexNumericLiteral(lexer: Lexer): IToken | null {
  if(!isDigit(lexer.current())) return null;

  let type = 'int';
  let offset = -1;

  if(lexer.lookAhead(0,2) === '2#' && isDigit(lexer.lookAhead(3))) {
    type = 'binary';
    offset = 1;
  }

  if(lexer.lookAhead(0,2) === '8#' && isDigit(lexer.lookAhead(3))) {
    type = 'octal';
    offset = 1;
  }

  if(lexer.lookAhead(0,3) === '16#' && isHexDigit(lexer.lookAhead(4))) {
    type = 'hex';
    offset = 2;
  }

  let numberString = '';
  while(true) {
    const next = lexer.lookAhead(++offset);
    switch(type) {

      case 'int':
        if(isDigit(next)) numberString += next;
        else if(next === '.') {
          numberString += next;
          type = 'real';
        }
        else if(
          lexer.lookAhead(offset,2).toUpperCase() === 'E+' && isDigit(lexer.lookAhead(offset+2)) ||
          lexer.lookAhead(offset,2).toUpperCase() === 'E-' && isDigit(lexer.lookAhead(offset+2))
        ) {
          numberString += lexer.lookAhead(offset,2);
          offset++;
          type = 'engineering';
        }
        else {
          return lexer.newToken(
            TokenKind.IntegerLiteral,
            offset,
            parseInt(numberString)
          );
        }
        break;

      case 'real':
        if(isDigit(next)) numberString += next;
        else if(
          lexer.lookAhead(offset,2).toUpperCase() === 'E+' && isDigit(lexer.lookAhead(offset+2)) ||
          lexer.lookAhead(offset,2).toUpperCase() === 'E-' && isDigit(lexer.lookAhead(offset+2))
        ) {
          numberString += lexer.lookAhead(offset,2);
          offset++;
          type = 'engineering';
        }
        else {
          return lexer.newToken(
            TokenKind.RealLiteral,
            offset,
            parseFloat(numberString)
          );
        }
        break;

      case 'engineering':
        if(isDigit(next)) numberString += next;
        else {
          const [base, power] = numberString.toUpperCase().split('E');
          return lexer.newToken(
            TokenKind.RealLiteral,
            offset,
            parseFloat(base) * Math.pow(10, parseInt(power))
          );
        }
        break;

      case 'binary':
        if(isDigit(next)) numberString += next;
        else if(next === '_') offset++;
        else {
          return lexer.newToken(
            TokenKind.IntegerLiteral,
            offset,
            parseInt(numberString, 2)
          );
        }
        break;

      case 'octal':
        if(isDigit(next)) numberString += next;
        else if(next === '_') offset++;
        else {
          return lexer.newToken(
            TokenKind.IntegerLiteral,
            offset,
            parseInt(numberString, 8)
          );
        }
        break;

      case 'hex':
        if(isHexDigit(next)) numberString += next;
        else {
          return lexer.newToken(
            TokenKind.IntegerLiteral,
            offset,
            parseInt(numberString, 16)
          );
        }
        break;
    }
  }
}

export function isDigit(character: string) {
  return (
    character === '0' ||
    character === '1' ||
    character === '2' ||
    character === '3' ||
    character === '4' ||
    character === '5' ||
    character === '6' ||
    character === '7' ||
    character === '8' ||
    character === '9'
  );
}

export function isHexDigit(character: string) {
  return (
    character === '0' ||
    character === '1' ||
    character === '2' ||
    character === '3' ||
    character === '4' ||
    character === '5' ||
    character === '6' ||
    character === '7' ||
    character === '8' ||
    character === '9' ||
    character === 'a' ||
    character === 'A' ||
    character === 'b' ||
    character === 'B' ||
    character === 'c' ||
    character === 'C' ||
    character === 'd' ||
    character === 'D' ||
    character === 'e' ||
    character === 'E' ||
    character === 'f' ||
    character === 'F'
  );
}
