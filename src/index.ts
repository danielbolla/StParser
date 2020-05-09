import Lexer from './lexer/lexer';
import TokenKind from './lexer/tokenKind';

const lexer = new Lexer('12e+2 D#2020-05-09-12:30:30.1 TOD#1:00:10.12 123 12.3 2#01010 8#67 16#FF 1E+2 1E-2 12e+2 true false \'sdgds dsafkj $$ $\' $0D $l$r$n$t$pjs3423 \'');
const tokens = lexer.lex();
console.clear();
console.table(tokens.map(t=> {
  return {...t, kind: TokenKind[t.kind]};
}));

