import IToken from './token';
import Lexer from './lexer';
import TokenKind from './tokenKind';
import { isIdentifierMiddle } from './identifierLexer';

export default function lexKeyword(lexer: Lexer): IToken | null {

  switch(lexer.current().toUpperCase()) {
    case 'B':
      if (
        lexer.lookAhead(0,2)?.toUpperCase() === 'BY' &&
        !isIdentifierMiddle(lexer.lookAhead(2))
      ) return lexer.newToken(TokenKind.ByKeyword, 2);

      return null;

    case 'C':
      if (
        lexer.lookAhead(0,4)?.toUpperCase() === 'CASE' &&
        !isIdentifierMiddle(lexer.lookAhead(4))
      ) return lexer.newToken(TokenKind.CaseKeyword, 4);

      if (
        lexer.lookAhead(0,5)?.toUpperCase() === 'CATCH' &&
        !isIdentifierMiddle(lexer.lookAhead(5))
      ) return lexer.newToken(TokenKind.CatchKeyword, 5);

      if (
        lexer.lookAhead(0,8)?.toUpperCase() === 'CONTINUE' &&
        !isIdentifierMiddle(lexer.lookAhead(8))
      ) return lexer.newToken(TokenKind.ContinueKeyword, 8);

      return null;

    case 'D':
      if (
        lexer.lookAhead(0,2)?.toUpperCase() === 'DO' &&
        !isIdentifierMiddle(lexer.lookAhead(2))
      ) return lexer.newToken(TokenKind.DoKeyword, 2);

      return null;

    case 'E':
      if (
        lexer.lookAhead(0,4)?.toUpperCase() === 'ELSE' &&
        !isIdentifierMiddle(lexer.lookAhead(4))
      ) return lexer.newToken(TokenKind.ElseKeyword, 4);

      if (
        lexer.lookAhead(0,5)?.toUpperCase() === 'ELSIF' &&
        !isIdentifierMiddle(lexer.lookAhead(5))
      ) return lexer.newToken(TokenKind.ElseIfKeyword, 5);

      if (
        lexer.lookAhead(0,8)?.toUpperCase() === 'END_CASE' &&
        !isIdentifierMiddle(lexer.lookAhead(8))
      ) return lexer.newToken(TokenKind.EndCaseKeyword, 8);

      if (
        lexer.lookAhead(0,7)?.toUpperCase() === 'END_FOR' &&
        !isIdentifierMiddle(lexer.lookAhead(7))
      ) return lexer.newToken(TokenKind.EndForKeyword, 7);

      if (
        lexer.lookAhead(0,6)?.toUpperCase() === 'END_IF' &&
        !isIdentifierMiddle(lexer.lookAhead(6))
      ) return lexer.newToken(TokenKind.EndIfKeyword, 6);

      if (
        lexer.lookAhead(0,10)?.toUpperCase() === 'END_REPEAT' &&
        !isIdentifierMiddle(lexer.lookAhead(10))
      ) return lexer.newToken(TokenKind.EndRepeatKeyword, 10);

      if (
        lexer.lookAhead(0,7)?.toUpperCase() === 'END_TRY' &&
        !isIdentifierMiddle(lexer.lookAhead(7))
      ) return lexer.newToken(TokenKind.EndTryKeyword, 7);

      if (
        lexer.lookAhead(0,9)?.toUpperCase() === 'END_WHILE' &&
        !isIdentifierMiddle(lexer.lookAhead(9))
      ) return lexer.newToken(TokenKind.EndWhileKeyword, 9);

      if (
        lexer.lookAhead(0,4)?.toUpperCase() === 'EXIT' &&
        !isIdentifierMiddle(lexer.lookAhead(4))
      ) return lexer.newToken(TokenKind.ExitKeyword, 4);

      return null;

    case 'F':
      if (
        lexer.lookAhead(0,7)?.toUpperCase() === 'FINALLY' &&
        !isIdentifierMiddle(lexer.lookAhead(7))
      ) return lexer.newToken(TokenKind.FinallyKeyword, 7);

      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'FOR' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.ForKeyword, 3);

      return null;

    case 'I':
      if (
        lexer.lookAhead(0,2)?.toUpperCase() === 'IF' &&
        !isIdentifierMiddle(lexer.lookAhead(2))
      ) return lexer.newToken(TokenKind.IfKeyword, 2);

      return null;

    case 'J':
      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'JMP' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.JumpKeyword, 3);

      return null;

    case 'O':
      if (
        lexer.lookAhead(0,2)?.toUpperCase() === 'OF' &&
        !isIdentifierMiddle(lexer.lookAhead(2))
      ) return lexer.newToken(TokenKind.OfKeyword, 2);

      return null;

    case 'R':
      if (
        lexer.lookAhead(0,6)?.toUpperCase() === 'REPEAT' &&
        !isIdentifierMiddle(lexer.lookAhead(6))
      ) return lexer.newToken(TokenKind.RepeatKeyword, 6);

      if (
        lexer.lookAhead(0,6)?.toUpperCase() === 'RETURN' &&
        !isIdentifierMiddle(lexer.lookAhead(6))
      ) return lexer.newToken(TokenKind.ReturnKeyword, 6);

      return null;

    case 'T':
      if (
        lexer.lookAhead(0,4)?.toUpperCase() === 'THEN' &&
        !isIdentifierMiddle(lexer.lookAhead(4))
      ) return lexer.newToken(TokenKind.ThenKeyword, 4);

      if (
        lexer.lookAhead(0,2)?.toUpperCase() === 'TO' &&
        !isIdentifierMiddle(lexer.lookAhead(2))
      ) return lexer.newToken(TokenKind.ToKeyword, 2);

      if (
        lexer.lookAhead(0,3)?.toUpperCase() === 'TRY' &&
        !isIdentifierMiddle(lexer.lookAhead(3))
      ) return lexer.newToken(TokenKind.TryKeyword, 3);

      return null;

    case 'U':
      if (
        lexer.lookAhead(0,5)?.toUpperCase() === 'UNTIL' &&
        !isIdentifierMiddle(lexer.lookAhead(5))
      ) return lexer.newToken(TokenKind.UntilKeyword, 5);

      return null;

    case 'W':
      if (
        lexer.lookAhead(0,5)?.toUpperCase() === 'WHILE' &&
        !isIdentifierMiddle(lexer.lookAhead(5))
      ) return lexer.newToken(TokenKind.WhileKeyword, 5);

      return null;

    default:
      return null;
  }
}
