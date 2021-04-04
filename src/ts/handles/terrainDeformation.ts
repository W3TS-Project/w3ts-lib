/** @noSelfInFile **/
//@ts-nocheck

import { integer, Position, real } from "../utils"
import { Handle } from "./handle"
import { Point } from "./point"

declare function TerrainDeformCrater(
    x: real,
    y: real,
    radius: real,
    depth: real,
    duration: integer,
    permanent: boolean
): terraindeformation
declare function TerrainDeformRipple(
    x: real,
    y: real,
    radius: real,
    depth: real,
    duration: integer,
    count: integer,
    spaceWaves: real,
    timeWaves: real,
    radiusStartPct: real,
    limitNeg: boolean
): terraindeformation
declare function TerrainDeformWave(
    x: real,
    y: real,
    dirX: real,
    dirY: real,
    distance: real,
    speed: real,
    radius: real,
    depth: real,
    trailTime: integer,
    count: integer
): terraindeformation
declare function TerrainDeformRandom(
    x: real,
    y: real,
    radius: real,
    minDelta: real,
    maxDelta: real,
    duration: integer,
    updateInterval: integer
): terraindeformation
declare function TerrainDeformStop(deformation: terraindeformation, duration: number): void
declare function TerrainDeformStopAll(): void

export class TerrainDeformation extends Handle<terraindeformation> {
    public static createCraterCoords(
        x: real,
        y: real,
        radius: real,
        depth: real,
        duration: integer,
        permanent: boolean
    ) {
        return new this(TerrainDeformCrater(x, y, radius, depth, duration, permanent))
    }

    public static createCraterPos(
        p: Position,
        radius: real,
        depth: real,
        duration: integer,
        permanent: boolean
    ) {
        p = <Point>p
        return this.createCraterCoords(p.x, p.y, radius, depth, duration, permanent)
    }

    public static createRippleCoords(
        x: real,
        y: real,
        radius: real,
        depth: real,
        duration: integer,
        count: integer,
        spaceWaves: real,
        timeWaves: real,
        radiusStartPct: real,
        limitNeg: boolean
    ) {
        return new this(
            TerrainDeformRipple(
                x,
                y,
                radius,
                depth,
                duration,
                count,
                spaceWaves,
                timeWaves,
                radiusStartPct,
                limitNeg
            )
        )
    }

    public static createRipplePos(
        p: Position,
        radius: real,
        depth: real,
        duration: integer,
        count: integer,
        spaceWaves: real,
        timeWaves: real,
        radiusStartPct: real,
        limitNeg: boolean
    ) {
        p = <Point>p
        return this.createRippleCoords(
            p.x,
            p.y,
            radius,
            depth,
            duration,
            count,
            spaceWaves,
            timeWaves,
            radiusStartPct,
            limitNeg
        )
    }

    public static createWaveCoords(
        x: real,
        y: real,
        dirX: real,
        dirY: real,
        distance: real,
        speed: real,
        radius: real,
        depth: real,
        trailTime: integer,
        count: integer
    ) {
        return new this(
            TerrainDeformWave(x, y, dirX, dirY, distance, speed, radius, depth, trailTime, count)
        )
    }

    public static createWavePos(
        p: Position,
        dirPos: Position,
        distance: real,
        speed: real,
        radius: real,
        depth: real,
        trailTime: integer,
        count: integer
    ) {
        p = <Point>p
        dirPos = <Point>dirPos
        return this.createWaveCoords(
            p.x,
            p.y,
            dirPos.x,
            dirPos.y,
            distance,
            speed,
            radius,
            depth,
            trailTime,
            count
        )
    }

    public static createRandomCoords(
        x: real,
        y: real,
        radius: real,
        minDelta: real,
        maxDelta: real,
        duration: integer,
        updateInterval: integer
    ) {
        return new this(
            TerrainDeformRandom(x, y, radius, minDelta, maxDelta, duration, updateInterval)
        )
    }

    public static createRandomPos(
        p: Position,
        radius: real,
        minDelta: real,
        maxDelta: real,
        duration: integer,
        updateInterval: integer
    ) {
        p = <Point>p
        return this.createRandomCoords(
            p.x,
            p.y,
            radius,
            minDelta,
            maxDelta,
            duration,
            updateInterval
        )
    }

    public stop(duration: integer) {
        TerrainDeformStop(this.handle, duration)
        return this
    }

    public static fromHandle(handle: terraindeformation): ThisType<terraindeformation> {
        return this.getObject(handle)
    }

    public static stopAll() {
        TerrainDeformStopAll()
        return this
    }
}
