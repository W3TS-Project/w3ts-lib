/* eslint-disable @typescript-eslint/triple-slash-reference */
// This is necessary to bring in Lua and Ceres declarations into the scope
// Another alternative is to put these into the `types` array in `tsconfig.json`
/// <reference types="lua-types/5.3"/>
/// <reference types="ceres-decl/ceres"/>

import { Timer } from "./handles/timer";

const timer = new Timer()

declare function KillUnit(whichUnit: unit): void

timer.start(1.0, false, () => {
  //@ts-ignore
  KillUnit(0)
})