import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';
import { isHexDigit } from './numericLiteralLexer';

export default function lexStringLiteral(lexer: Lexer): IToken | null {
  if(lexer.current() !== '\'') return null;

  let string = '';
  let offset = 1;
  let next = lexer.lookAhead(offset++);
  while(next !== '\'') {
    if(!next) return lexer.newToken(TokenKind.InvalidToken, offset);
    // escaping and special characters
    if(next === '$') {
      switch (lexer.lookAhead(offset).toUpperCase()) {
        case '\'':
          string += '\'';
          break;

        case '$':
          string += '$';
          break;

        case 'L':
          string += '\n';
          break;

        case 'R':
          string += '\r';
          break;

        case 'N':
          string += '\n';
          break;

        case 'T':
          string += '\t';
          break;

        case 'P':
          string += '\f';
          break;

        default:
          //Character codes (e.g: $0D)
          if(isHexDigit(lexer.lookAhead(offset)) && isHexDigit(lexer.lookAhead(offset+1))) {
            const characterCode = parseInt(lexer.lookAhead(offset, 2), 16);
            string += String.fromCharCode(characterCode);
            offset++;
          }
          else {
            return lexer.newToken(TokenKind.InvalidToken, offset);
          }
      }
      offset++;
    }
    else {
      string += next;
    }
    next = lexer.lookAhead(offset++);
  }
  return lexer.newToken(TokenKind.StringLiteral, offset, string);
}
