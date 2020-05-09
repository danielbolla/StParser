import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('literal lexers', () => {

  it('lex true', () => {

    const code = 'true';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.BooleanLiteral,
      index: 0,
      code: 'true',
      value: true
    });

  });

  it('lex false', () => {

    const code = 'false';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.BooleanLiteral,
      index: 0,
      code: 'false',
      value: false
    });

  });

  it('lex 123', () => {

    const code = '123';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.IntegerLiteral,
      index: 0,
      code: '123',
      value: 123
    });

  });

  it('lex 123.56', () => {

    const code = '123.56';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.RealLiteral,
      index: 0,
      code: '123.56',
      value: 123.56
    });

  });

  it('lex 12e+2', () => {

    const code = '12e+2';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.RealLiteral,
      index: 0,
      code: '12e+2',
      value: 1200
    });

  });

  it('lex \'hello world\'', () => {

    const code = '\'hello world$$$\'$0D$l$r$n$t$p\'';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.StringLiteral,
      index: 0,
      code: '\'hello world$$$\'$0D$l$r$n$t$p\'',
      value: 'hello world$\'\r\n\r\n\t\f'
    });

  });

  it('lex DATE#2020-05-09', () => {

    const code = 'DATE#2020-05-09';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.DateLiteral,
      index: 0,
      code: 'DATE#2020-05-09',
      value: new Date('2020-05-09T00:00:00.000Z')
    });

  });

  it('lex DATE#2020-05-09-12:00:10.123', () => {

    const code = 'DATE#2020-05-09-12:00:10.123';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.DateLiteral,
      index: 0,
      code: 'DATE#2020-05-09-12:00:10.123',
      value: new Date('2020-05-09T12:00:10.123Z')
    });

  });

  it('lex TOD#1:00:10.12', () => {

    const code = 'TOD#1:00:10.12';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result[0]).eql({
      kind: TokenKind.TimeOfDateLiteral,
      index: 0,
      code: 'TOD#1:00:10.12',
      value: 3610120000
    });

  });

});
