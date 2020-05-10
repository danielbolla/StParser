import Lexer from './lexer/lexer';
import TokenKind from './lexer/tokenKind';

const lexer = new Lexer('12e+2  \r\n  D#2020-05-09-12:30:30.1 TOD#1:00:10.12');
const tokens = lexer.lex();
console.clear();
console.table(
  tokens
    //.filter(t => t.kind !== TokenKind.WhitespaceSeparator && t.kind !== TokenKind.NewLineSeparator)
    .map(t => {return {...t, kind: TokenKind[t.kind]};})
);
