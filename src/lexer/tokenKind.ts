enum TokenKind {
  // keywords
  _TryKeyword,
  _CatchKeyword,
  _FinallyKeyword,
  _EndTryKeyword,

  // separators
  WhitespaceSeparator,
  NewLineSeparator,

  // Operators

    // Arithmetic Operators
    AddOperator,
    SubtractOperator,
    MultiplyOperator,
    DivideOperator,
    ModuloOperator,
    MoveOperator,
    SizeOfOperator,

    // Bitstring Operators
    _AndOperator,
    _OrOperator,
    _XOrOperator,
    _NotOperator,
    _AndThenOperator,
    _OrElseOperator,

    // Bitshift Operators
    _ShiftLeftOperator,
    _ShiftRightOperator,
    _RotateLeftOperator,
    _RotateRightOperator,

    // Selection Operators
    _SelectOperator,
    _MaximumOperator,
    _MinimumOperator,
    _LimitOperator,
    _MultiplexerOperator,

    // Comparison Operators
    _GreaterThanOperator,
    _LessThanOperator,
    _LessEqualOperator,
    _GreaterEqualOperator,
    _EqualOperator,
    _NotEqualOperator,

    // Address Operators
    _AddressOperator,
    _ContentOperator,
    _BitAddressOperator,

    // Call Operators
    _CallOperator,

    // Type Conversion Operators
    // TODO

    // Numeric Operators
    _AbsoluteOperator,
    _SquareRootOperator,
    _NatoralLogrithmOperator,
    _LogarithmOperator,
    _ExponentialOperator,
    _PowerOfOperator,
    _SineOperator,
    _ArcSineOperator,
    _CosineOperator,
    _TangentOperator,
    _ArcCosineOperator,
    _ArcTangentOperator,

    // Namespace Operators
    // TODO ???

    // Multicore Operators
    _TestAndSetOperator,
    _CompareAndSwapOperator,
    _XAddOperator,

    // Special Operators
    _DeleteOperator,
    _IsValidReferenceOperator,
    _NewOperator,
    _QueryInterfaceOperator,
    _QueryPointerOperator,
    _InitializeOperator,
    _PositionOperator,
    _PouNameOperator,

  // identifier
  Identifier,

  // literals
  BooleanLiteral,
  IntegerLiteral,
  RealLiteral,
  StringLiteral,
  DateLiteral,
  TimeOfDateLiteral,

  // comments

  // invalid
  InvalidToken

}

export default TokenKind;
