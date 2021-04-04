/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../utils"
import { Handle } from "./handle"

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
declare function BlzGetTriggerFrameEvent(): frameeventtype
declare function BlzGetTriggerFrameValue(): real
declare function BlzGetTriggerFrameText(): string
declare function BlzEnableUIAutoPosition(enable: boolean): void
declare function BlzGetOriginFrame(frameType: originframetype, index: integer): framehandle
declare function BlzHideOriginFrames(enable: boolean): void
declare function BlzLoadTOCFile(TOCFile: string): boolean

export class Frame extends Handle<framehandle> {
    public static create(name: string, owner: Frame, priority: integer, createContext: integer) {
        return new this(BlzCreateFrame(name, owner.getHandle, priority, createContext))
    }

    public static simpleCreate(name: string, owner: Frame, createContext: integer) {
        return new this(BlzCreateSimpleFrame(name, owner.getHandle, createContext))
    }

    public static byTypeCreate(
        typeName: string,
        name: string,
        owner: Frame,
        inherits: string,
        createContext: integer
    ) {
        return new this(BlzCreateFrameByType(typeName, name, owner.getHandle, inherits, createContext))
    }

    public static fromOrigin(frameType: originframetype, index: integer) {
        return this.fromHandle(BlzGetOriginFrame(frameType, index))
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
    }

    public setPoint(
        point: framepointtype,
        relative: Frame,
        relativePoint: framepointtype,
        x: real,
        y: real
    ) {
        BlzFrameSetPoint(this.getHandle, point, relative.getHandle, relativePoint, x, y)
        return this
    }

    public setAbsPoint(point: framepointtype, x: real, y: real) {
        BlzFrameSetAbsPoint(this.getHandle, point, x, y)
        return this
    }

    public clearPoints() {
        BlzFrameClearAllPoints(this.getHandle)
        return this
    }

    public setAllPoints(relative: Frame) {
        BlzFrameSetAllPoints(this.getHandle, relative.getHandle)
        return this
    }

    public set visible(flag: boolean) {
        BlzFrameSetVisible(this.getHandle, flag)
    }

    public setVisible(flag: boolean) {
        BlzFrameSetVisible(this.getHandle, flag)
        return this
    }

    public get visible(): boolean {
        return BlzFrameIsVisible(this.getHandle)
    }

    public static fromName(name: string, createContext: integer) {
        return this.fromHandle(BlzGetFrameByName(name, createContext))
    }

    public get name(): string {
        return BlzFrameGetName(this.getHandle)
    }

    public click() {
        BlzFrameClick(this.getHandle)
        return this
    }

    public set text(text: string) {
        BlzFrameSetText(this.getHandle, text)
    }

    public get text(): string {
        return BlzFrameGetText(this.getHandle)
    }

    public addText(text: string) {
        BlzFrameAddText(this.getHandle, text)
        return this
    }

    public set sizeLimitText(size: integer) {
        BlzFrameSetTextSizeLimit(this.getHandle, size)
    }

    public get sizeLimitText(): integer {
        return BlzFrameGetTextSizeLimit(this.getHandle)
    }

    public setTextColor(color: integer) {
        BlzFrameSetTextColor(this.getHandle, color)
        return this
    }

    public setFocus(flag: boolean) {
        BlzFrameSetFocus(this.getHandle, flag)
        return this
    }

    public setModel(modelFile: string, cameraIndex: integer) {
        BlzFrameSetModel(this.getHandle, modelFile, cameraIndex)
        return this
    }

    public set enabled(flag: boolean) {
        BlzFrameSetEnable(this.getHandle, flag)
    }

    public setEnabled(flag: boolean) {
        BlzFrameSetEnable(this.getHandle, flag)
        return this
    }

    public get enabled(): boolean {
        return BlzFrameGetEnable(this.getHandle)
    }

    public set alpha(alpha: integer) {
        BlzFrameSetAlpha(this.getHandle, alpha)
    }

    public setAlpha(alpha: integer) {
        BlzFrameSetAlpha(this.getHandle, alpha)
        return this
    }

    public get alpha(): integer {
        return BlzFrameGetAlpha(this.getHandle)
    }

    public setSpriteAnimate(primaryProp: integer, flags: integer) {
        BlzFrameSetSpriteAnimate(this.getHandle, primaryProp, flags)
        return this
    }

    public setTexture(texFile: string, flag: integer, blend: boolean) {
        BlzFrameSetTexture(this.getHandle, texFile, flag, blend)
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

    public set value(value: real) {
        BlzFrameSetValue(this.getHandle, value)
    }

    public setValue(value: real) {
        BlzFrameSetValue(this.getHandle, value)
        return this
    }

    public get value(): real {
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
        BlzFrameSetVertexColor(this.getHandle, color)
        return this
    }

    public setLevel(level: integer) {
        BlzFrameSetLevel(this.getHandle, level)
        return this
    }

    public set parent(parent: Frame) {
        BlzFrameSetParent(this.getHandle, parent.getHandle)
    }

    public get parent() {
        return Frame.fromHandle(BlzFrameGetParent(this.getHandle))
    }

    public set width(width: real) {
        BlzFrameSetSize(this.getHandle, width, this.height)
    }

    public setWidth(width: real) {
        BlzFrameSetSize(this.getHandle, width, this.height)
        return this
    }

    public get width(): real {
        return BlzFrameGetWidth(this.getHandle)
    }

    public setFont(filename: string, height: real, flags: integer) {
        BlzFrameSetFont(this.getHandle, filename, height, flags)
        return this
    }

    public setTextAlignment(vert: textaligntype, horz: textaligntype) {
        BlzFrameSetTextAlignment(this.getHandle, vert, horz)
        return this
    }

    public set height(height: real) {
        BlzFrameSetSize(this.getHandle, this.width, height)
    }

    public setHeight(height: number) {
        BlzFrameSetSize(this.getHandle, this.width, height)
        return this
    }

    public get height(): real {
        return BlzFrameGetHeight(this.getHandle)
    }

    public setParent(parent: Frame) {
        BlzFrameSetParent(this.getHandle, parent.getHandle)
        return this
    }

    public setText(text: string) {
        BlzFrameSetText(this.getHandle, text)
        return this
    }

    public setTextSizeLimit(size: number) {
        BlzFrameSetTextSizeLimit(this.getHandle, size)
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

    public static getEventType(): frameeventtype {
        return BlzGetTriggerFrameEvent()
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
