/* eslint-disable @typescript-eslint/triple-slash-reference */
// This is necessary to bring in Lua and Ceres declarations into the scope
// Another alternative is to put these into the `types` array in `tsconfig.json`
/// <reference types="lua-types/5.3"/>
/// <reference types="ceres-decl/ceres"/>

import { AutomationTest } from "./API/automation test";
import { Blight } from "./API/blight";
import { AllPlayers } from "./globals/constants";
import { MapPlayer } from "./handles/player";
import { Timer } from "./handles/timer";
import { Unit } from "./handles/unit";

export const setTimeout = (time: number, call: () => void) => new Timer().start(time, false, () => {
  call()
  Timer.fromExpired().pause().destroy()
})

export const setInterval = (time: number, call: () => void) => new Timer().start(time, true, call)