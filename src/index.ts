import Lexer from './lexer/lexer';
import TokenKind from './lexer/tokenKind';

const lexer = new Lexer(`
  IF true THEN
  END_IF
`);

const tokens = lexer.lex();
console.clear();
console.table(
  tokens
    .filter(t => t.kind !== TokenKind.WhitespaceSeparator && t.kind !== TokenKind.NewLineSeparator)
    .map(t => {return {...t, kind: TokenKind[t.kind]};})
);
