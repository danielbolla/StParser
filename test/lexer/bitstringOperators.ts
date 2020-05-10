import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('botstring operator lexers', () => {

  it('lex AND AND_THEN NOT OR_ELSE OR XOR', () => {

    const code = 'AND AND_THEN NOT OR OR_ELSE XOR';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(11);
    expect(result[0]).eql({
      kind: TokenKind.AndOperator,
      index: 0,
      code: 'AND',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.AndThenOperator,
      index: 4,
      code: 'AND_THEN',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.NotOperator,
      index: 13,
      code: 'NOT',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.OrOperator,
      index: 17,
      code: 'OR',
      value: null
    });
    expect(result[8]).eql({
      kind: TokenKind.OrElseOperator,
      index: 20,
      code: 'OR_ELSE',
      value: null
    });
    expect(result[10]).eql({
      kind: TokenKind.XOrOperator,
      index: 28,
      code: 'XOR',
      value: null
    });

  });

});
