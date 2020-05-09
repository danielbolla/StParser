enum TokenKind {
  // keywords
  TryKeyword,
  CatchKeyword,
  FinallyKeyword,
  EndTryKeyword,

  // separators
  WhitespaceSeparator,
  NewLineSeparator,

  // Operators

    // Arithmetic Operators
    AddOperator,
    SubtructOperator,
    MultiplyOperator,
    DivideOperator,
    ModuloOperator,
    MoveOperator,
    IndexOfOperator,
    SizeOfOperator,

    // Bitstring Operators
    AndOperator,
    OrOperator,
    XOrOperator,
    NotOperator,
    AndThenOperator,
    OrElseOperator,

    // Bitshift Operators
    ShiftLeftOperator,
    ShiftRightOperator,
    RotateLeftOperator,
    RotateRightOperator,

    // Selection Operators
    SelectOperator,
    MaximumOperator,
    MinimumOperator,
    LimitOperator,
    MultiplexerOperator,

    // Comparison Operators
    GreaterThanOperator,
    LessThanOperator,
    LessEqualOperator,
    GreaterEqualOperator,
    EqualOperator,
    NotEqualOperator,

    // Address Operators
    AddressOperator,
    ContentOperator,
    BitAddressOperator,

    // Call Operators
    CallOperator,

    // Type Conversion Operators
    // TODO

    // Numeric Operators
    AbsoluteOperator,
    SquareRootOperator,
    NatoralLogrithmOperator,
    LogarithmOperator,
    ExponentialOperator,
    PowerOfOperator,
    SineOperator,
    ArcSineOperator,
    CosineOperator,
    TangentOperator,
    ArcCosineOperator,
    ArcTangentOperator,

    // Namespace Operators
    // TODO ???

    // Multicore Operators
    TestAndSetOperator,
    CompareAndSwapOperator,
    XAddOperator,

    // Special Operators
    DeleteOperator,
    IsValidReferenceOperator,
    NewOperator,
    QueryInterfaceOperator,
    QueryPointerOperator,
    InitializeOperator,
    PositionOperator,
    PouNameOperator,

  // identifier
  Identifier,

  // literals

  // comments

  // invalid
  InvalidToken

}

export default TokenKind;
