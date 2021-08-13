import { LimitOperation } from "../../API/fields/events/LimitOperation"

export abstract class LimitOperations {
    static readonly LESS_THAN = LimitOperation.convert(0)
    static readonly LESS_THAN_OR_EQUAL = LimitOperation.convert(1)
    static readonly EQUAL = LimitOperation.convert(2)
    static readonly GREATER_THAN_OR_EQUAL = LimitOperation.convert(3)
    static readonly GREATER_THAN = LimitOperation.convert(4)
    static readonly NOT_EQUAL = LimitOperation.convert(5)
}
