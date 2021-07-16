import { LimitOperation } from "../../API/fields/events/LimitOperation"

export abstract class LimitOperations {
    public static readonly LESS_THAN = new LimitOperation(0)
    public static readonly LESS_THAN_OR_EQUAL = new LimitOperation(1)
    public static readonly EQUAL = new LimitOperation(2)
    public static readonly GREATER_THAN_OR_EQUAL = new LimitOperation(3)
    public static readonly GREATER_THAN = new LimitOperation(4)
    public static readonly NOT_EQUAL = new LimitOperation(5)
}
