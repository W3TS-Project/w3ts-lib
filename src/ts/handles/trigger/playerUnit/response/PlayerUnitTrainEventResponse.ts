/** @noSelfInFile **/
//@ts-nocheck

import { UnitRawCode } from "../../../rawCode/UnitRawCode"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetTrainedUnitType(): integer

export class PlayerUnitTrainEventResponse extends PlayerUnitEventResponse {
    trainedRawCode = UnitRawCode.get(GetTrainedUnitType())
}
