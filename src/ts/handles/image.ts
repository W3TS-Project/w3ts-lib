/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { Point } from "./Point"

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

let var_file: string
let var_sizeX: real
let var_sizeY: real
let var_sizeZ: real
let var_posX: real
let var_posY: real
let var_posZ: real
let var_originX: real
let var_originY: real
let var_originZ: real
let var_imageType: ImageType

export class Image extends Handle<image> {
    isHidden = false
    constantHeight: real = 0
    heightIsConstant = false
    colorRed: integer = 255
    colorGreen: integer = 255
    colorBlue: integer = 255
    colorAlpha: integer = 0
    isRender = false
    isRenderAlways = false
    isAboveWater = false
    useWaterAlpha = false
    file: string
    sizeX: real
    sizeY: real
    sizeZ: real
    point: Point
    originX: real
    originY: real
    originZ: real
    imageType: ImageType

    constructor(handle: image) {
        super(handle)
        this.file = var_file
        this.sizeX = var_sizeX
        this.sizeY = var_sizeY
        this.sizeZ = var_sizeZ
        this.point = new Point(var_posX, var_posY, var_posZ)
        this.originX = var_originX
        this.originY = var_originY
        this.originZ = var_originZ
        this.imageType = var_imageType
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
        var_file = file
        var_sizeX = sizeX
        var_sizeY = sizeY
        var_sizeZ = sizeZ
        var_posX = posX
        var_posY = posY
        var_posZ = posZ
        var_originX = originX
        var_originY = originY
        var_originZ = originZ
        var_imageType = imageType
        return new this(
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
        DestroyImage(this.getHandle() as image)
        super.destroy()
    }

    show(flag: boolean) {
        ShowImage(this.getHandle() as image, flag)
        this.isHidden = !flag
        return this
    }

    setConstantHeight(flag: boolean, height: real) {
        SetImageConstantHeight(this.getHandle() as image, flag, height)
        this.constantHeight = height
        this.heightIsConstant = flag
        return this
    }

    setCoords(x: real, y: real, z: real) {
        SetImagePosition(this.getHandle() as image, x, y, z)
        this.point.setCoords(x, y, z)
        return this
    }

    setPos(pos: Position) {
        return this.setCoords(pos.x, pos.y, pos.z)
    }

    setColor(red: integer, green: integer, blue: integer, alpha: integer) {
        red = Math.floor(red)
        green = Math.floor(green)
        blue = Math.floor(blue)
        alpha = Math.floor(alpha)
        SetImageColor(
            this.getHandle() as image,
            red,
            green,
            blue,
            alpha
        )
        this.colorRed = red
        this.colorGreen = green
        this.colorBlue = blue
        this.colorAlpha = alpha
        return this
    }

    setRender(flag: boolean) {
        SetImageRender(this.getHandle() as image, flag)
        this.isRender = flag
        return this
    }

    setRenderAlways(flag: boolean) {
        SetImageRenderAlways(this.getHandle() as image, flag)
        this.isRenderAlways = flag
        return this
    }

    setAboveWater(flag: boolean, useWaterAlpha: boolean) {
        SetImageAboveWater(this.getHandle() as image, flag, useWaterAlpha)
        this.isAboveWater = flag
        this.useWaterAlpha = useWaterAlpha
        return this
    }

    setType(imageType: ImageType) {
        SetImageType(this.getHandle() as image, imageType)
        this.imageType = imageType
        return this
    }

    static fromHandle(handle: image): Image {
        return this.getObject(handle) as Image
    }
}
