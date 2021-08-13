import { ItemBooleanField } from "../../API/fields/item/ItemBooleanField"
import { RawCode } from "../../RawCode"

export abstract class ItemBooleanFields {
    static readonly DROPPED_WHEN_CARRIER_DIES = new ItemBooleanField(
        RawCode.get("idrp"),
        "Падает на землю, если владелец умирает"
    )
    static readonly CAN_BE_DROPPED = new ItemBooleanField(
        RawCode.get("idro"),
        "Может быть выброшен"
    )
    static readonly PERISHABLE = new ItemBooleanField(RawCode.get("iper"), "Может закончиться")
    static readonly INCLUDE_AS_RANDOM_CHOICE = new ItemBooleanField(
        RawCode.get("iprn"),
        "Включить как случайный выбор"
    )
    static readonly USE_AUTOMATICALLY_WHEN_ACQUIRED = new ItemBooleanField(
        RawCode.get("ipow"),
        "Используется сразу"
    )
    static readonly CAN_BE_SOLD_TO_MERCHANTS = new ItemBooleanField(
        RawCode.get("ipaw"),
        "Можно продать в лавках"
    )
    static readonly ACTIVELY_USED = new ItemBooleanField(RawCode.get("iusa"), "Нужно задействовать")
}
