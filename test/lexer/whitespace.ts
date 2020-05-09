import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('whitespace lexer', () => {

  it('lex "hello \t\tworld\r\n"', () => {

    const code = 'hello \t\tworld\r\n';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(4);
    expect(result[1]).eql({
      kind: TokenKind.WhitespaceSeparator,
      index: 5,
      code: ' \t\t',
      value: null
    });
    expect(result[3]).eql({
      kind: TokenKind.WhitespaceSeparator,
      index: 13,
      code: '\r\n',
      value: null
    });

  });

});
