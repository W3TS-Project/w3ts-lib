/* eslint-disable @typescript-eslint/triple-slash-reference */
// This is necessary to bring in Lua and Ceres declarations into the scope
// Another alternative is to put these into the `types` array in `tsconfig.json`
/// <reference types="lua-types/5.3"/>
/// <reference types="ceres-decl/ceres"/>

import { Destructable } from "./handles/destructable"
import { Timer } from "./handles/timer"
import { real, setTimeout } from "./utils"


const timer = setTimeout(1.00, () => {
    // print(timer)
    // print(Timer.fromExpired())
    const d = Destructable.fromEvent()
    print(d)
    print(d.name)
    print('время 1 сек.')
})

// print(timer)

// setTimeout(1.00, () => {
//     print(timer)
// }, true)
