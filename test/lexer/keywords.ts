import 'mocha';
import { expect } from 'chai';
import Lexer from '../../src/lexer/lexer';
import TokenKind from '../../src/lexer/tokenKind';

describe('keyword lexers', () => {

  it('lex IF THEN ELSIF ELSE END_IF', () => {

    const code = 'IF THEN ELSIF ELSE END_IF';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(9);
    expect(result[0]).eql({
      kind: TokenKind.IfKeyword,
      index: 0,
      code: 'IF',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.ThenKeyword,
      index: 3,
      code: 'THEN',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.ElseIfKeyword,
      index: 8,
      code: 'ELSIF',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.ElseKeyword,
      index: 14,
      code: 'ELSE',
      value: null
    });
    expect(result[8]).eql({
      kind: TokenKind.EndIfKeyword,
      index: 19,
      code: 'END_IF',
      value: null
    });

  });

  it('lex FOR TO BY DO EXIT CONTINUE END_FOR', () => {

    const code = 'FOR TO BY DO EXIT CONTINUE END_FOR';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(13);
    expect(result[0]).eql({
      kind: TokenKind.ForKeyword,
      index: 0,
      code: 'FOR',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.ToKeyword,
      index: 4,
      code: 'TO',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.ByKeyword,
      index: 7,
      code: 'BY',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.DoKeyword,
      index: 10,
      code: 'DO',
      value: null
    });
    expect(result[8]).eql({
      kind: TokenKind.ExitKeyword,
      index: 13,
      code: 'EXIT',
      value: null
    });
    expect(result[10]).eql({
      kind: TokenKind.ContinueKeyword,
      index: 18,
      code: 'CONTINUE',
      value: null
    });
    expect(result[12]).eql({
      kind: TokenKind.EndForKeyword,
      index: 27,
      code: 'END_FOR',
      value: null
    });

  });

  it('lex WHILE DO EXIT END_WHILE', () => {

    const code = 'WHILE DO EXIT END_WHILE';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(7);
    expect(result[0]).eql({
      kind: TokenKind.WhileKeyword,
      index: 0,
      code: 'WHILE',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.DoKeyword,
      index: 6,
      code: 'DO',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.ExitKeyword,
      index: 9,
      code: 'EXIT',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.EndWhileKeyword,
      index: 14,
      code: 'END_WHILE',
      value: null
    });

  });

  it('lex REPEAT EXIT UNTIL END_REPEAT', () => {

    const code = 'REPEAT EXIT UNTIL END_REPEAT';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(7);
    expect(result[0]).eql({
      kind: TokenKind.RepeatKeyword,
      index: 0,
      code: 'REPEAT',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.ExitKeyword,
      index: 7,
      code: 'EXIT',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.UntilKeyword,
      index: 12,
      code: 'UNTIL',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.EndRepeatKeyword,
      index: 18,
      code: 'END_REPEAT',
      value: null
    });

  });

  it('lex CASE OF ELSE END_CASE', () => {

    const code = 'CASE OF ELSE END_CASE';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(7);
    expect(result[0]).eql({
      kind: TokenKind.CaseKeyword,
      index: 0,
      code: 'CASE',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.OfKeyword,
      index: 5,
      code: 'OF',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.ElseKeyword,
      index: 8,
      code: 'ELSE',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.EndCaseKeyword,
      index: 13,
      code: 'END_CASE',
      value: null
    });

  });

  it('lex TRY CATCH FINALLY END_TRY', () => {

    const code = 'TRY CATCH FINALLY END_TRY';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(7);
    expect(result[0]).eql({
      kind: TokenKind.TryKeyword,
      index: 0,
      code: 'TRY',
      value: null
    });
    expect(result[2]).eql({
      kind: TokenKind.CatchKeyword,
      index: 4,
      code: 'CATCH',
      value: null
    });
    expect(result[4]).eql({
      kind: TokenKind.FinallyKeyword,
      index: 10,
      code: 'FINALLY',
      value: null
    });
    expect(result[6]).eql({
      kind: TokenKind.EndTryKeyword,
      index: 18,
      code: 'END_TRY',
      value: null
    });

  });

  it('lex RETURN', () => {

    const code = 'RETURN';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(1);
    expect(result[0]).eql({
      kind: TokenKind.ReturnKeyword,
      index: 0,
      code: 'RETURN',
      value: null
    });

  });

  it('lex JMP', () => {

    const code = 'JMP';
    const lexer = new Lexer(code);
    const result = lexer.lex();

    expect(result).an('array');
    expect(result.length).equal(1);
    expect(result[0]).eql({
      kind: TokenKind.JumpKeyword,
      index: 0,
      code: 'JMP',
      value: null
    });

  });

});
