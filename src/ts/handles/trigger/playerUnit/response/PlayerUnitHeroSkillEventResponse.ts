/** @noSelfInFile **/
//@ts-nocheck

import { AbilityRawCode } from "../../../rawCode/AbilityRawCode"
import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetLearningUnit(): unit
declare function GetLearnedSkill(): integer
declare function GetLearnedSkillLevel(): integer

export class PlayerUnitHeroSkillEventResponse extends PlayerUnitEventResponse {
    learning = Unit.fromHandle(GetLearningUnit())
    skillCode = AbilityRawCode.get(GetLearnedSkill())
    skillLevel: integer = GetLearnedSkillLevel()
}
