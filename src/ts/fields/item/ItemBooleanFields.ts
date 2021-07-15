import { ItemBooleanField } from "../../API/fields/item/ItemBooleanField";
import { RawCode } from "../../RawCode";

export abstract class ItemBooleanFields {
	public static readonly DROPPED_WHEN_CARRIER_DIES = new ItemBooleanField(new RawCode('idrp'), 'Падает на землю, если владелец умирает')
	public static readonly CAN_BE_DROPPED = new ItemBooleanField(new RawCode('idro'), 'Может быть выброшен')
	public static readonly PERISHABLE = new ItemBooleanField(new RawCode('iper'), 'Может закончиться')
	public static readonly INCLUDE_AS_RANDOM_CHOICE = new ItemBooleanField(new RawCode('iprn'), 'Включить как случайный выбор')
	public static readonly USE_AUTOMATICALLY_WHEN_ACQUIRED = new ItemBooleanField(new RawCode('ipow'), 'Используется сразу')
	public static readonly CAN_BE_SOLD_TO_MERCHANTS = new ItemBooleanField(new RawCode('ipaw'), 'Можно продать в лавках')
	public static readonly ACTIVELY_USED = new ItemBooleanField(new RawCode('iusa'), 'Нужно задействовать')
}