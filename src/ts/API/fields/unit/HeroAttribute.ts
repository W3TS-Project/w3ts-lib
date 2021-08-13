/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertHeroAttribute(i: integer): heroattribute

export class HeroAttribute extends Field<heroattribute> {
    static convert(id: integer) {
        return this.proto_convert(ConvertHeroAttribute, id)
    }
}
