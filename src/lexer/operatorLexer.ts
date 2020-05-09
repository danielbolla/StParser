import IToken from './token';
import lexArithmeticOperator from './aritmeticOperatorLexer';
import Lexer from './lexer';

export default function lexOperator(lexer: Lexer): IToken | null {
  let token: IToken | null = null;

  if(token = lexArithmeticOperator(lexer)) return token;

  return token;
}
