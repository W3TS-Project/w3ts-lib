/** @noSelfInFile **/
//@ts-nocheck

import { AbilityRawCode } from "../../../rawCode/AbilityRawCode"
import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetLearningUnit(): unit
declare function GetLearnedSkill(): integer
declare function GetLearnedSkillLevel(): integer

export class UnitHeroSkillEventResponse extends UnitEventResponse {
    learning = Unit.fromHandle(GetLearningUnit())
    skillCode = AbilityRawCode.get(GetLearnedSkill())
    skillLevel: integer = GetLearnedSkillLevel()
}
