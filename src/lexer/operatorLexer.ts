import IToken from './token';
import lexArithmeticOperator from './aritmeticOperatorLexer';
import Lexer from './lexer';
import lexBitstringOperator from './bitstringOperatorLexer';
import lexComparisonOperator from './comparisonOperatorLexer';

export default function lexOperator(lexer: Lexer): IToken | null {
  let token: IToken | null = null;

  if(token = lexArithmeticOperator(lexer)) return token;
  else if(token = lexBitstringOperator(lexer)) return token;
  else if(token = lexComparisonOperator(lexer)) return token;
  return null;
}
