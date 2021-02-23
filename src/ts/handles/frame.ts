/** @noSelfInFile **/
// @ts-nocheck

import { integer, real } from "../main"
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
    constructor(handle: framehandle) {
        super(Handle.initFromHandle() ? undefined : handle)
    }

    static create(name: string, owner: Frame, priority: integer, createContext: integer) {
        return new this(BlzCreateFrame(name, owner.handle, priority, createContext))
    }

    static simpleCreate(name: string, owner: Frame, createContext: integer) {
        return new this(BlzCreateSimpleFrame(name, owner.handle, createContext))
    }

    static byTypeCreate(
        typeName: string,
        name: string,
        owner: Frame,
        inherits: string,
        createContext: integer
    ) {
        return new this(BlzCreateFrameByType(typeName, name, owner.handle, inherits, createContext))
    }

    static fromOrigin(frameType: originframetype, index: integer) {
        return this.fromHandle(BlzGetOriginFrame(frameType, index))
    }

    static autoPosition(enable: boolean) {
        BlzEnableUIAutoPosition(enable)
        return this
    }

    static hideOrigin(enable: boolean) {
        BlzHideOriginFrames(enable)
        return this
    }

    destroy() {
        BlzDestroyFrame(this.handle)
        return this
    }

    setPoint(
        point: framepointtype,
        relative: Frame,
        relativePoint: framepointtype,
        x: real,
        y: real
    ) {
        BlzFrameSetPoint(this.handle, point, relative.handle, relativePoint, x, y)
        return this
    }

    setAbsPoint(point: framepointtype, x: real, y: real) {
        BlzFrameSetAbsPoint(this.handle, point, x, y)
        return this
    }

    clearPoints() {
        BlzFrameClearAllPoints(this.handle)
        return this
    }

    setAllPoints(relative: Frame) {
        BlzFrameSetAllPoints(this.handle, relative.handle)
        return this
    }

    set visible(flag: boolean) {
        BlzFrameSetVisible(this.handle, flag)
    }

    setVisible(flag: boolean) {
        BlzFrameSetVisible(this.handle, flag)
        return this
    }

    get visible(): boolean {
        return BlzFrameIsVisible(this.handle)
    }

    static fromName(name: string, createContext: integer) {
        return this.fromHandle(BlzGetFrameByName(name, createContext))
    }

    get name(): string {
        return BlzFrameGetName(this.handle)
    }

    click() {
        BlzFrameClick(this.handle)
        return this
    }

    set text(text: string) {
        BlzFrameSetText(this.handle, text)
    }

    get text(): string {
        return BlzFrameGetText(this.handle)
    }

    addText(text: string) {
        BlzFrameAddText(this.handle, text)
        return this
    }

    set sizeLimitText(size: integer) {
        BlzFrameSetTextSizeLimit(this.handle, size)
    }

    get sizeLimitText(): integer {
        return BlzFrameGetTextSizeLimit(this.handle)
    }

    setTextColor(color: integer) {
        BlzFrameSetTextColor(this.handle, color)
        return this
    }

    setFocus(flag: boolean) {
        BlzFrameSetFocus(this.handle, flag)
        return this
    }

    setModel(modelFile: string, cameraIndex: integer) {
        BlzFrameSetModel(this.handle, modelFile, cameraIndex)
        return this
    }

    set enabled(flag: boolean) {
        BlzFrameSetEnable(this.handle, flag)
    }

    setEnabled(flag: boolean) {
        BlzFrameSetEnable(this.handle, flag)
        return this
    }

    get enabled(): boolean {
        return BlzFrameGetEnable(this.handle)
    }

    set alpha(alpha: integer) {
        BlzFrameSetAlpha(this.handle, alpha)
    }

    setAlpha(alpha: integer) {
        BlzFrameSetAlpha(this.handle, alpha)
        return this
    }

    get alpha(): integer {
        return BlzFrameGetAlpha(this.handle)
    }

    setSpriteAnimate(primaryProp: integer, flags: integer) {
        BlzFrameSetSpriteAnimate(this.handle, primaryProp, flags)
        return this
    }

    setTexture(texFile: string, flag: integer, blend: boolean) {
        BlzFrameSetTexture(this.handle, texFile, flag, blend)
        return this
    }

    setScale(scale: real) {
        BlzFrameSetScale(this.handle, scale)
        return this
    }

    setTooltip(tooltip: Frame) {
        BlzFrameSetTooltip(this.handle, tooltip.handle)
        return this
    }

    cageMouse(enable: boolean) {
        BlzFrameCageMouse(this.handle, enable)
        return this
    }

    set value(value: real) {
        BlzFrameSetValue(this.handle, value)
    }

    setValue(value: real) {
        BlzFrameSetValue(this.handle, value)
        return this
    }

    get value(): real {
        return BlzFrameGetValue(this.handle)
    }

    setMinMaxValue(minValue: real, maxValue: real) {
        BlzFrameSetMinMaxValue(this.handle, minValue, maxValue)
        return this
    }

    setStepSize(stepSize: real) {
        BlzFrameSetStepSize(this.handle, stepSize)
        return this
    }

    setSize(width: real, height: real) {
        BlzFrameSetSize(this.handle, width, height)
        return this
    }

    setVertexColor(color: integer) {
        BlzFrameSetVertexColor(this.handle, color)
        return this
    }

    setLevel(level: integer) {
        BlzFrameSetLevel(this.handle, level)
        return this
    }

    set parent(parent: Frame) {
        BlzFrameSetParent(this.handle, parent.handle)
    }

    get parent() {
        return Frame.fromHandle(BlzFrameGetParent(this.handle))
    }

    set width(width: real) {
        BlzFrameSetSize(this.handle, width, this.height)
    }

    setWidth(width: real) {
        BlzFrameSetSize(this.handle, width, this.height)
        return this
    }

    get width(): real {
        return BlzFrameGetWidth(this.handle)
    }

    setFont(filename: string, height: real, flags: integer) {
        BlzFrameSetFont(this.handle, filename, height, flags)
        return this
    }

    setTextAlignment(vert: textaligntype, horz: textaligntype) {
        BlzFrameSetTextAlignment(this.handle, vert, horz)
        return this
    }

    set height(height: real) {
        BlzFrameSetSize(this.handle, this.width, height)
    }

    setHeight(height: number) {
        BlzFrameSetSize(this.handle, this.width, height)
        return this
    }

    get height(): real {
        return BlzFrameGetHeight(this.handle)
    }

    setParent(parent: Frame) {
        BlzFrameSetParent(this.handle, parent.handle)
        return this
    }

    setText(text: string) {
        BlzFrameSetText(this.handle, text)
        return this
    }

    setTextSizeLimit(size: number) {
        BlzFrameSetTextSizeLimit(this.handle, size)
        return this
    }

    static fromHandle(handle: framehandle): Frame {
        return this.getObject(handle)
    }

    static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrame())
    }

    static getEventHandle() {
        return BlzGetTriggerFrameEvent()
    }

    static getEventText() {
        return BlzGetTriggerFrameText()
    }

    static getEventValue() {
        return BlzGetTriggerFrameValue()
    }

    static loadTOC(filename: string) {
        return BlzLoadTOCFile(filename)
    }
}
