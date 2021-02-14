/* eslint-disable @typescript-eslint/triple-slash-reference */
// This is necessary to bring in Lua and Ceres declarations into the scope
// Another alternative is to put these into the `types` array in `tsconfig.json`
/// <reference types="lua-types/5.3"/>
/// <reference types="ceres-decl/ceres"/>

import { AutomationTest } from "./API/automation test"
import { Blight } from "./API/blight"
import { AllPlayers } from "./globals/constants"
import { Location } from "./handles/location"
import { MapPlayer } from "./handles/player"
import { Point } from "./handles/point"
import { TerrainDeformation } from "./handles/terrain deformation"
import { Timer } from "./handles/timer"
import { Unit } from "./handles/unit"

export type integer = number
export type real = number
export type code = Function

export const setTimeout = (time: real, call: () => void) =>
    new Timer().start(time, false, () => {
        call()
        Timer.fromExpired()
            .pause()
            .destroy()
    })

export const setInterval = (time: real, call: () => void) => new Timer().start(time, true, call)

export type rawcode = integer | string

export const formatCC = (id: rawcode): integer => (typeof id === "number" ? id : FourCC(id))

export type Coords = {
    x: real
    y: real
    z: real
}

export type Position = Coords | Location | Point