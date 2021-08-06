import { MapLocation } from "./handles/MapLocation"
import { Point } from "./handles/Point"

export type Position = MapLocation | Point

let func: () => void

compiletime(() => {
    func = () => print('function')
})

compiletime(() => {
    func()
})

const metadata = compiletime(() => {
    let metadata: { [key: string]: any } = {}
    for (const id in currentMap?.objects.unit.all) {
        const object = currentMap?.objects.unit.all[id]
        metadata[id] = object?.getField("umdl")
    }
    return metadata
})

export const init = () => {

}