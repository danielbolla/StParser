import IToken from './token';
import Lexer from './lexer';
import lexBoolLiteral from './boolLiteralLexer';
import lexDateLiteral from './dateLiteralLexer';
import lexStringLiteral from './stringLiteralLexer';
import lexNumericLiteral from './numericLiteralLexer';
import lexTimeOfDayLiteral from './timeOfDayLiteralLexer';

export default function lexLiteral(lexer: Lexer): IToken | null {

  let token: IToken | null = null;
  if(token = lexStringLiteral(lexer)) return token;
  else if(token = lexBoolLiteral(lexer)) return token;
  else if(token = lexDateLiteral(lexer)) return token;
  else if(token = lexTimeOfDayLiteral(lexer)) return token;
  else if(token = lexNumericLiteral(lexer)) return token;
  else return null;

}
