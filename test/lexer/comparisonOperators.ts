import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('comparison operators', () => {

  it('lex = <> < <= > >=', () => {

    const code = '= <> < <= > >=';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(11);
    expect(result[0]).eql({
      kind: TokenKind.EqualOperator,
      index: 0,
      code: '=',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.NotEqualOperator,
      index: 2,
      code: '<>',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.LessThanOperator,
      index: 5,
      code: '<',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.LessEqualOperator,
      index: 7,
      code: '<=',
      value: null
    });
    expect(result[8]).eql({
      kind: TokenKind.GreaterThanOperator,
      index: 10,
      code: '>',
      value: null
    });
    expect(result[10]).eql({
      kind: TokenKind.GreaterEqualOperator,
      index: 12,
      code: '>=',
      value: null
    });

  });

});
