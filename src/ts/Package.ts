import { AllPlayers, Constants } from "./globals/constants"
import { MapLocation } from "./handles/MapLocation"
import { MapPlayer } from "./handles/MapPlayer"
import { Point } from "./handles/Point"
import { UnitRawCode } from "./handles/rawCode/UnitRawCode"
import { PlayerUnitDeathTrigger } from "./handles/trigger/playerUnit/PlayerUnitTriggers"
import { Unit } from "./handles/Unit"

export type Position = MapLocation | Point

const metadata = compiletime(() => {
    let metadata: { [key: string]: any } = {}
    for (const id in currentMap?.objects.unit.all) {
        const object = currentMap?.objects.unit.all[id]
        metadata[id] = object?.getField("umdl")
    }
    return metadata
})

export const SETTING_SOME_PROPERTIES = true

export const init = () => {
    Constants.init()

    const mage = Unit.fromHandle(gg_unit_Hblm_0000)
    const peasant = Unit.createCoords(
        AllPlayers[0],
        UnitRawCode.get("hpea"),
        mage.getX(),
        mage.getY(),
        0
    )
    peasant.setLife(1)

    const trigger = new PlayerUnitDeathTrigger(AllPlayers[0])

    new PlayerUnitDeathTrigger(AllPlayers[0]).addEventListener(response => {
        print(response)
        print(response.dying.getName())
        print(response.player.getName())
        print(response.killer.getName())
        print(response.unit.getName())
    })
}
