/** @noSelfInFile **/
//@ts-nocheck

import { FrameOriginType } from "../API/fields/frame/FrameOriginType"
import { FramePointType } from "../API/fields/frame/FramePointType"
import { TextAlignType } from "../API/fields/frame/TextAlignType"
import { Position } from "../Package"
import { Handle } from "./Handle"

declare function BlzCreateFrame(
    name: string,
    owner: framehandle,
    priority: integer,
    createContext: integer
): framehandle
declare function BlzCreateSimpleFrame(
    name: string,
    owner: framehandle,
    createContext: integer
): framehandle
declare function BlzCreateFrameByType(
    typeName: string,
    name: string,
    owner: framehandle,
    inherits: string,
    createContext: integer
): framehandle
declare function BlzDestroyFrame(frame: framehandle): void
declare function BlzFrameSetPoint(
    frame: framehandle,
    point: framepointtype,
    relative: framehandle,
    relativePoint: framepointtype,
    x: real,
    y: real
): void
declare function BlzFrameSetAbsPoint(
    frame: framehandle,
    point: framepointtype,
    x: real,
    y: real
): void
declare function BlzFrameClearAllPoints(frame: framehandle): void
declare function BlzFrameSetAllPoints(frame: framehandle, relative: framehandle): void
declare function BlzFrameSetVisible(frame: framehandle, visible: boolean): void
declare function BlzFrameIsVisible(frame: framehandle): boolean
declare function BlzGetFrameByName(name: string, createContext: integer): framehandle
declare function BlzFrameGetName(frame: framehandle): string
declare function BlzFrameClick(frame: framehandle): void
declare function BlzFrameSetText(frame: framehandle, text: string): void
declare function BlzFrameGetText(frame: framehandle): string
declare function BlzFrameAddText(frame: framehandle, text: string): void
declare function BlzFrameSetTextSizeLimit(frame: framehandle, size: integer): void
declare function BlzFrameGetTextSizeLimit(frame: framehandle): integer
declare function BlzFrameSetTextColor(frame: framehandle, color: integer): void
declare function BlzFrameSetFocus(frame: framehandle, flag: boolean): void
declare function BlzFrameSetModel(frame: framehandle, modelFile: string, cameraIndex: integer): void
declare function BlzFrameSetEnable(frame: framehandle, enabled: boolean): void
declare function BlzFrameGetEnable(frame: framehandle): boolean
declare function BlzFrameSetAlpha(frame: framehandle, alpha: integer): void
declare function BlzFrameGetAlpha(frame: framehandle): integer
declare function BlzFrameSetSpriteAnimate(
    frame: framehandle,
    primaryProp: integer,
    flags: integer
): void
declare function BlzFrameSetTexture(
    frame: framehandle,
    texFile: string,
    flag: integer,
    blend: boolean
): void
declare function BlzFrameSetScale(frame: framehandle, scale: real): void
declare function BlzFrameSetTooltip(frame: framehandle, tooltip: framehandle): void
declare function BlzFrameCageMouse(frame: framehandle, enable: boolean): void
declare function BlzFrameSetValue(frame: framehandle, value: real): void
declare function BlzFrameGetValue(frame: framehandle): real
declare function BlzFrameSetMinMaxValue(frame: framehandle, minValue: real, maxValue: real): void
declare function BlzFrameSetStepSize(frame: framehandle, stepSize: real): void
declare function BlzFrameSetSize(frame: framehandle, width: real, height: real): void
declare function BlzFrameSetVertexColor(frame: framehandle, color: integer): void
declare function BlzFrameSetLevel(frame: framehandle, level: integer): void
declare function BlzFrameSetParent(frame: framehandle, parent: framehandle): void
declare function BlzFrameGetParent(frame: framehandle): framehandle
declare function BlzFrameGetHeight(frame: framehandle): real
declare function BlzFrameGetWidth(frame: framehandle): real
declare function BlzFrameSetFont(
    frame: framehandle,
    fileName: string,
    height: real,
    flags: integer
): void
declare function BlzFrameSetTextAlignment(
    frame: framehandle,
    vert: textaligntype,
    horz: textaligntype
): void
declare function BlzGetTriggerFrame(): framehandle
declare function BlzGetTriggerFrameValue(): real
declare function BlzGetTriggerFrameText(): string
declare function BlzEnableUIAutoPosition(enable: boolean): void
declare function BlzGetOriginFrame(frameType: originframetype, index: integer): framehandle
declare function BlzHideOriginFrames(enable: boolean): void
declare function BlzLoadTOCFile(TOCFile: string): boolean

export class Frame extends Handle<framehandle> {
    public static create(name: string, owner: Frame, priority: integer, createContext: integer) {
        return new this(BlzCreateFrame(name, owner.getHandle, Math.round(priority), Math.round(createContext)))
    }

    public static createSimple(name: string, owner: Frame, createContext: integer) {
        return new this(BlzCreateSimpleFrame(name, owner.getHandle, Math.round(createContext)))
    }

    public static createByType(
        typeName: string,
        name: string,
        owner: Frame,
        inherits: string,
        createContext: integer
    ) {
        return new this(BlzCreateFrameByType(typeName, name, owner.getHandle, inherits, Math.round(createContext)))
    }

    public static fromOrigin(frameType: FrameOriginType, index: integer) {
        return this.fromHandle(BlzGetOriginFrame(frameType.getHandle, Math.round(index)))
    }

    public static autoPosition(enable: boolean) {
        BlzEnableUIAutoPosition(enable)
        return this
    }

    public static hideOrigin(enable: boolean) {
        BlzHideOriginFrames(enable)
        return this
    }

    public destroy() {
        BlzDestroyFrame(this.getHandle)
        return this
    }

    public setPointCoords(
        point: FramePointType,
        relative: Frame,
        relativePoint: FramePointType,
        x: real,
        y: real
    ) {
        BlzFrameSetPoint(this.getHandle, point.getHandle, relative.getHandle, relativePoint.getHandle, x, y)
        return this
    }

    public setPointPos(point: FramePointType, relative: Frame, relativePoint: FramePointType, p: Position) {
        return this.setPointCoords(point, relative, relativePoint, p.getX(), p.getY())
    }

    public setAbsPointCoords(point: FramePointType, x: real, y: real) {
        BlzFrameSetAbsPoint(this.getHandle, point.getHandle, x, y)
        return this
    }

    public setAbsPointPos(point: FramePointType, p: Position) {
        return this.setAbsPointCoords(point, p.getX(), p.getY())
    }

    public clearPoints() {
        BlzFrameClearAllPoints(this.getHandle)
        return this
    }

    public setAllPoints(relative: Frame) {
        BlzFrameSetAllPoints(this.getHandle, relative.getHandle)
        return this
    }

    public setVisible(flag: boolean) {
        BlzFrameSetVisible(this.getHandle, flag)
        return this
    }

    public isVisible(): boolean {
        return BlzFrameIsVisible(this.getHandle)
    }

    public static fromName(name: string, createContext: integer) {
        return this.fromHandle(BlzGetFrameByName(name, Math.round(createContext)))
    }

    public getName(): string {
        return BlzFrameGetName(this.getHandle)
    }

    public click() {
        BlzFrameClick(this.getHandle)
        return this
    }

    public setText(text: string) {
        BlzFrameSetText(this.getHandle, text)
        return this
    }

    public getText(): string {
        return BlzFrameGetText(this.getHandle)
    }

    public addText(text: string) {
        BlzFrameAddText(this.getHandle, text)
        return this
    }

    public setSizeLimitText(size: integer) {
        BlzFrameSetTextSizeLimit(this.getHandle, Math.round(size))
        return this
    }

    public getSizeLimitText(): integer {
        return BlzFrameGetTextSizeLimit(this.getHandle)
    }

    public setTextColor(color: integer) {
        BlzFrameSetTextColor(this.getHandle, Math.round(color))
        return this
    }

    public setFocus(flag: boolean) {
        BlzFrameSetFocus(this.getHandle, flag)
        return this
    }

    public setModel(modelFile: string, cameraIndex: integer) {
        BlzFrameSetModel(this.getHandle, modelFile, Math.round(cameraIndex))
        return this
    }

    public setEnable(flag: boolean) {
        BlzFrameSetEnable(this.getHandle, flag)
        return this
    }

    public getEnable(): boolean {
        return BlzFrameGetEnable(this.getHandle)
    }

    public setAlpha(alpha: integer) {
        BlzFrameSetAlpha(this.getHandle, Math.round(alpha))
    }

    public getAlpha(): integer {
        return BlzFrameGetAlpha(this.getHandle)
    }

    public setSpriteAnimate(primaryProp: integer, flags: integer) {
        BlzFrameSetSpriteAnimate(this.getHandle, Math.round(primaryProp), Math.round(flags))
        return this
    }

    public setTexture(texFile: string, flag: integer, blend: boolean) {
        BlzFrameSetTexture(this.getHandle, texFile, Math.round(flag), blend)
        return this
    }

    public setScale(scale: real) {
        BlzFrameSetScale(this.getHandle, scale)
        return this
    }

    public setTooltip(tooltip: Frame) {
        BlzFrameSetTooltip(this.getHandle, tooltip.getHandle)
        return this
    }

    public cageMouse(enable: boolean) {
        BlzFrameCageMouse(this.getHandle, enable)
        return this
    }

    public setValue(value: real) {
        BlzFrameSetValue(this.getHandle, value)
        return this
    }

    public getValue(): real {
        return BlzFrameGetValue(this.getHandle)
    }

    public setMinMaxValue(minValue: real, maxValue: real) {
        BlzFrameSetMinMaxValue(this.getHandle, minValue, maxValue)
        return this
    }

    public setStepSize(stepSize: real) {
        BlzFrameSetStepSize(this.getHandle, stepSize)
        return this
    }

    public setSize(width: real, height: real) {
        BlzFrameSetSize(this.getHandle, width, height)
        return this
    }

    public setVertexColor(color: integer) {
        BlzFrameSetVertexColor(this.getHandle, Math.round(color))
        return this
    }

    public setLevel(level: integer) {
        BlzFrameSetLevel(this.getHandle, Math.round(level))
        return this
    }

    public setParent(parent: Frame) {
        BlzFrameSetParent(this.getHandle, parent.getHandle)
        return this
    }

    public getParent() {
        return Frame.fromHandle(BlzFrameGetParent(this.getHandle))
    }

    public setWidth(width: real) {
        BlzFrameSetSize(this.getHandle, width, this.getHeight())
        return this
    }

    public getWidth(): real {
        return BlzFrameGetWidth(this.getHandle)
    }

    public setFont(filename: string, height: real, flags: integer) {
        BlzFrameSetFont(this.getHandle, filename, height, Math.round(flags))
        return this
    }

    public setTextAlignment(vert: TextAlignType, horz: TextAlignType) {
        BlzFrameSetTextAlignment(this.getHandle, vert.getHandle, horz.getHandle)
        return this
    }

    public setHeight(height: real) {
        BlzFrameSetSize(this.getHandle, this.getWidth(), height)
        return this
    }

    public getHeight(): real {
        return BlzFrameGetHeight(this.getHandle)
    }

    public setTextSizeLimit(size: integer) {
        BlzFrameSetTextSizeLimit(this.getHandle, Math.round(size))
        return this
    }

    public static fromHandle(handle: framehandle): Frame {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrame())
    }

    public static fromObject(handleObject: Frame): framehandle {
        return this.getHandle(handleObject)
    }

    public static getEventText(): string {
        return BlzGetTriggerFrameText()
    }

    public static getEventValue(): real {
        return BlzGetTriggerFrameValue()
    }

    public static loadTOC(filename: string): boolean {
        return BlzLoadTOCFile(filename)
    }
}
