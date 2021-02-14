/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertLimitOp = (i: number) => limitop

const c = ConvertLimitOp

export const LimitOp = {
    LessThan: c(0),
    LessThanOrEqual: c(1),
    Equal: c(2),
    GreaterThanOrEqual: c(3),
    GreaterThan: c(4),
    NotEqual: c(5)
}
