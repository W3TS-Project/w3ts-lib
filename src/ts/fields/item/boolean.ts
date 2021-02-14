/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertItemBooleanField = (i: number) => itembooleanfield

const c = (s: string): itembooleanfield => ConvertItemBooleanField(FourCC(s))

export const ItemBooleanField = {
    DroppedWhenCarrierDies: c("idrp"),
    CanBeDropped: c("idro"),
    Perishable: c("iper"),
    IncludeAsRandomChoice: c("iprn"),
    UseAutomaticallyWhenAcquired: c("ipow"),
    CanBeSoldToMerchants: c("ipaw"),
    ActivelyUsed: c("iusa")
}
