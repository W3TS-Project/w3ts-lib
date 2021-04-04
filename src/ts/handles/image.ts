/** @noSelfInFile **/
//@ts-nocheck

import { integer, Position, real } from "../utils"
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
    public constructor(
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
            CreateImage(
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

    public static coordsCreate(
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

    public static posCreate(
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

    public destroy() {
        DestroyImage(this.getHandle)
    }

    public show(flag: boolean) {
        ShowImage(this.getHandle, flag)
        return this
    }

    public setConstantHeight(flag: boolean, height: real) {
        SetImageConstantHeight(this.getHandle, flag, height)
        return this
    }

    public setCoords(x: real, y: real, z: real) {
        SetImagePosition(this.getHandle, x, y, z)
        return this
    }

    public setPos(pos: Position) {
        return this.setCoords(pos.x, pos.y, pos.z)
    }

    public setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetImageColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public setRender(flag: boolean) {
        SetImageRenderAlways(this.getHandle, flag)
        return this
    }

    public setAboveWater(flag: boolean, useWaterAlpha: boolean) {
        SetImageAboveWater(this.getHandle, flag, useWaterAlpha)
        return this
    }

    public setType(imageType: ImageType) {
        SetImageType(this.getHandle, imageType)
        return this
    }

    public static fromHandle(handle: image): Image {
        return this.getObject(handle)
    }

    public static fromObject(object: Image): image {
        return this.getHandle(object)
    }
}
