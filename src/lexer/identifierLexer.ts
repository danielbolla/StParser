import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';

export default function lexIdentifier(lexer: Lexer): IToken | null {
  if(!isLiteralStart(lexer.current())) return null;

  const index = lexer.index;
  let code = lexer.current();
  lexer.index++;
  while(true) {
    if(!isLiteralMiddle(lexer.current())) break;
    code += lexer.current();
    lexer.index++;
  }
  return {
    kind: TokenKind.Identifier,
    code,
    index,
    value: code
  };
}

function isLiteralStart(character: string): boolean {
  return new RegExp('^[a-zA-Z_]$').test(character);
}

function isLiteralMiddle(character: string): boolean {
  return new RegExp('^[a-zA-Z_0-9]$').test(character);
}
