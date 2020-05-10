import IToken from './token';
import lexArithmeticOperator from './aritmeticOperatorLexer';
import Lexer from './lexer';
import lexBitstringOperator from './bitstringOperatorLexer';

export default function lexOperator(lexer: Lexer): IToken | null {
  let token: IToken | null = null;

  if(token = lexArithmeticOperator(lexer)) return token;
  else if(token = lexBitstringOperator(lexer)) return token;
  return null;
}
