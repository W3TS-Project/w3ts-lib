import { ItemBooleanField } from "../../API/fields/item/ItemBooleanField";

export abstract class ItemBooleanFields {
	public static readonly DROPPED_WHEN_CARRIER_DIES = new ItemBooleanField('idrp', 'Падает на землю, если владелец умирает')
	public static readonly CAN_BE_DROPPED = new ItemBooleanField('idro', 'Может быть выброшен')
	public static readonly PERISHABLE = new ItemBooleanField('iper', 'Может закончиться')
	public static readonly INCLUDE_AS_RANDOM_CHOICE = new ItemBooleanField('iprn', 'Включить как случайный выбор')
	public static readonly USE_AUTOMATICALLY_WHEN_ACQUIRED = new ItemBooleanField('ipow', 'Используется сразу')
	public static readonly CAN_BE_SOLD_TO_MERCHANTS = new ItemBooleanField('ipaw', 'Можно продать в лавках')
	public static readonly ACTIVELY_USED = new ItemBooleanField('iusa', 'Нужно задействовать')
}