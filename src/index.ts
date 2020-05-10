import Lexer from './lexer/lexer';
import TokenKind from './lexer/tokenKind';

const lexer = new Lexer('IF THEN ELSE ELSIF END_IF FOR TO BY DO END_FOR CASE OF END_CASE WHILE END_WHILE REPEAT UNTIL END_REPEAT RETURN JMP EXIT CONTINUE TRY CATCH FINALLY END_TRY');
const tokens = lexer.lex();
console.clear();
console.table(
  tokens
    .filter(t => t.kind !== TokenKind.WhitespaceSeparator && t.kind !== TokenKind.NewLineSeparator)
    .map(t => {return {...t, kind: TokenKind[t.kind]};})
);
