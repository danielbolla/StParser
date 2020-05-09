import Lexer from './lexer/lexer';
import TokenKind from './lexer/tokenKind';

const lexer = new Lexer('test code _2+-+sfd+move/MOD+SIZ');
const tokens = lexer.lex();
console.clear();
console.table(tokens.map(t=> {
  return {...t, kind: TokenKind[t.kind]};
}));
