import Lexer from './lexer/lexer';
import TokenKind from './lexer/tokenKind';

const lexer = new Lexer('test code');
const tokens = lexer.lex();
console.table(tokens.map(t=> {
  return {...t, kind: TokenKind[t.kind]};
}));
