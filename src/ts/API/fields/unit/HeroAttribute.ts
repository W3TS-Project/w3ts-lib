/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertHeroAttribute(i: integer): heroattribute

export class HeroAttribute extends Field<heroattribute> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertHeroAttribute(id), id)
    }
}
