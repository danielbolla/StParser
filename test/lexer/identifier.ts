import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('identifier lexer', () => {

  it('lex "hello world"', () => {

    const code = 'hello world';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(3);
    expect(result[0]).eql({
      kind: TokenKind.Identifier,
      index: 0,
      code: 'hello',
      value: 'hello'
    });
    expect(result[2]).eql({
      kind: TokenKind.Identifier,
      index: 6,
      code: 'world',
      value: 'world'
    });

  });

});
