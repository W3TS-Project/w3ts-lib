/** @noSelfInFile **/
// @ts-nocheck

import { integer, Position, real } from "../main"
import { Handle } from "./handle"

declare function CreateImage(
    file: string,
    sizeX: real,
    sizeY: real,
    sizeZ: real,
    posX: real,
    posY: real,
    posZ: real,
    originX: real,
    originY: real,
    originZ: real,
    imageType: integer
): image
declare function DestroyImage(whichImage: image): void
declare function ShowImage(whichImage: image, flag: boolean): void
declare function SetImageConstantHeight(whichImage: image, flag: boolean, height: real): void
declare function SetImagePosition(whichImage: image, x: real, y: real, z: real): void
declare function SetImageColor(
    whichImage: image,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function SetImageRender(whichImage: image, flag: boolean): void
declare function SetImageRenderAlways(whichImage: image, flag: boolean): void
declare function SetImageAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): void
declare function SetImageType(whichImage: image, imageType: integer): void

export enum ImageType {
    Selection = 1,
    Indicator = 2,
    OcclusionMask = 3,
    Ubersplat = 4
}

export class Image extends Handle<image> {
    constructor(
        file: string,
        sizeX: real,
        sizeY: real,
        sizeZ: real,
        posX: real,
        posY: real,
        posZ: real,
        originX: real,
        originY: real,
        originZ: real,
        imageType: ImageType
    ) {
        super(
            Handle.initFromHandle()
                ? undefined
                : CreateImage(
                      file,
                      sizeX,
                      sizeY,
                      sizeZ,
                      posX,
                      posY,
                      posZ,
                      originX,
                      originY,
                      originZ,
                      imageType
                  )
        )
    }

    static coordsCreate(
        file: string,
        sizeX: real,
        sizeY: real,
        sizeZ: real,
        posX: real,
        posY: real,
        posZ: real,
        originX: real,
        originY: real,
        originZ: real,
        imageType: ImageType
    ) {
        return new this(
            file,
            sizeX,
            sizeY,
            sizeZ,
            posX,
            posY,
            posZ,
            originX,
            originY,
            originZ,
            imageType
        )
    }

    static posCreate(
        file: string,
        size: Position,
        pos: Position,
        originPos: Position,
        imageType: ImageType
    ) {
        return this.coordsCreate(
            file,
            size.x,
            size.y,
            size.z,
            pos.x,
            pos.y,
            pos.z,
            originPos.x,
            originPos.y,
            originPos.z,
            imageType
        )
    }

    destroy() {
        DestroyImage(this.handle)
    }

    show(flag: boolean) {
        ShowImage(this.handle, flag)
        return this
    }

    setConstantHeight(flag: boolean, height: real) {
        SetImageConstantHeight(this.handle, flag, height)
        return this
    }

    setCoords(x: real, y: real, z: real) {
        SetImagePosition(this.handle, x, y, z)
        return this
    }

    setPos(pos: Position) {
        return this.setCoords(pos.x, pos.y, pos.z)
    }

    setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetImageColor(this.handle, red, green, blue, alpha)
        return this
    }

    setRender(flag: boolean) {
        SetImageRenderAlways(this.handle, flag)
        return this
    }

    setAboveWater(flag: boolean, useWaterAlpha: boolean) {
        SetImageAboveWater(this.handle, flag, useWaterAlpha)
        return this
    }

    setType(imageType: ImageType) {
        SetImageType(this.handle, imageType)
        return this
    }

    public static fromHandle(handle: image): Image {
        return this.getObject(handle)
    }
}
