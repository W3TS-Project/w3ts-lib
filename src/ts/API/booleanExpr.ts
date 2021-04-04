// /** @noSelfInFile **/
// // @ts-nocheck

// import { Handle } from "../handles/handle"
// import { code } from "../utils"

// declare function And(operandA: boolexpr, operandB: boolexpr): boolexpr
// declare function Or(operandA: boolexpr, operandB: boolexpr): boolexpr
// declare function Not(operand: boolexpr): boolexpr
// declare function Condition(func: code): conditionfunc
// declare function DestroyCondition(c: conditionfunc): void
// declare function Filter(func: code): filterfunc
// declare function DestroyFilter(f: filterfunc): void
// declare function DestroyBoolExpr(e: boolexpr): void

// export type CodeBoolExpr = BoolExpr<boolexpr> | code
// export type CodeConditionFunc = ConditionFunc | code
// export type CodeFilterFunc = FilterFunc | code

// export const formatBoolExpr = (cbe: CodeBoolExpr): boolexpr => {
//     if (typeof cbe === "function") {
//         cbe = BoolExpr.cond(cbe)
//     }
//     return cbe.handle
// }

// export const formatConditionFunc = (ccf: CodeConditionFunc): conditionfunc => {
//     if (typeof ccf === "function") {
//         ccf = new ConditionFunc(ccf)
//     }
//     return ccf.handle
// }

// export const formatFilterFunc = (cff: CodeFilterFunc): filterfunc => {
//     if (typeof cff === "function") {
//         cff = new FilterFunc(cff)
//     }
//     return cff.handle
// }

// export class BoolExpr<T extends boolexpr> extends Handle<boolexpr> {
//     constructor(handle: T) {
//         super(Handle.initFromHandle() ? undefined : handle)
//     }

//     static and(operandA: BoolExpr<boolexpr>, operandB: BoolExpr<boolexpr>) {
//         return new this(And(operandA.handle, operandB.handle))
//     }

//     static or(operandA: BoolExpr<boolexpr>, operandB: BoolExpr<boolexpr>) {
//         return new this(Or(operandA.handle, operandB.handle))
//     }

//     static not(operand: BoolExpr<conditionfunc>) {
//         return new this(Not(operand.handle))
//     }

//     destroy() {
//         DestroyBoolExpr(this.handle)
//     }
// }

// export class ConditionFunc extends Handle<conditionfunc> {
//     constructor(func: code) {
//         super(Handle.initFromHandle() ? undefined : Condition(func))
//     }

//     destroy() {
//         DestroyCondition(this.handle)
//     }
// }

// export class FilterFunc extends Handle<filterfunc> {
//     constructor(func: code) {
//         super(Handle.initFromHandle() ? undefined : Filter(func))
//     }

//     destroy() {
//         DestroyFilter(this.handle)
//     }
// }
