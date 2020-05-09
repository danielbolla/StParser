import TokenKind from './tokenKind';

export default interface IToken {
  kind: TokenKind,
  code: string,
  index: number,
  value: any
}
