/** @noSelfInFile **/
//@ts-nocheck

import { UnitRawCode } from "../../rawCode/UnitRawCode"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetTrainedUnitType(): integer

export class UnitTrainEventResponse extends UnitEventResponse {
    trainedRawCode = UnitRawCode.get(GetTrainedUnitType())
}
