import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('arithmetic operators', () => {

  it('add', () => {

    const code = '1+2';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(3);
    expect(result[1]).eql({
      kind: TokenKind.AddOperator,
      index: 1,
      code: '+',
      value: null
    });

  });

  it('subtract', () => {

    const code = '1-2';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(3);
    expect(result[1]).eql({
      kind: TokenKind.SubtractOperator,
      index: 1,
      code: '-',
      value: null
    });

  });

  it('multiply', () => {

    const code = '1*2';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(3);
    expect(result[1]).eql({
      kind: TokenKind.MultiplyOperator,
      index: 1,
      code: '*',
      value: null
    });

  });

  it('divide', () => {

    const code = '1/2';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(3);
    expect(result[1]).eql({
      kind: TokenKind.DivideOperator,
      index: 1,
      code: '/',
      value: null
    });

  });

  it('modulo', () => {

    const code = 'MOD(1,2)';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(6);
    expect(result[0]).eql({
      kind: TokenKind.ModuloOperator,
      index: 0,
      code: 'MOD',
      value: null
    });

  });

  it('move', () => {

    const code = 'MOVE(v)';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(4);
    expect(result[0]).eql({
      kind: TokenKind.MoveOperator,
      index: 0,
      code: 'MOVE',
      value: null
    });

  });

  it('sizeof', () => {

    const code = 'SIZEOF(v)';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(4);
    expect(result[0]).eql({
      kind: TokenKind.SizeOfOperator,
      index: 0,
      code: 'SIZEOF',
      value: null
    });

  });

});
