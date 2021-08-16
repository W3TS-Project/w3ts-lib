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
    static originFramesHided = false

    static create(name: string, owner: Frame, priority: integer, createContext: integer) {
        return new this(
            BlzCreateFrame(
                name,
                owner.getHandle() as framehandle,
                Math.floor(priority),
                Math.floor(createContext)
            )
        )
    }

    static createSimple(name: string, owner: Frame, createContext: integer) {
        return new this(
            BlzCreateSimpleFrame(name, owner.getHandle() as framehandle, Math.floor(createContext))
        )
    }

    static createByType(
        typeName: string,
        name: string,
        owner: Frame,
        inherits: string,
        createContext: integer
    ) {
        return new this(
            BlzCreateFrameByType(
                typeName,
                name,
                owner.getHandle() as framehandle,
                inherits,
                Math.floor(createContext)
            )
        )
    }

    static fromOrigin(frameType: FrameOriginType, index: integer) {
        return this.fromHandle(
            BlzGetOriginFrame(frameType.getHandle() as originframetype, Math.floor(index))
        )
    }

    static autoPosition(enable: boolean) {
        BlzEnableUIAutoPosition(enable)
        return this
    }

    static hideOrigin(enable: boolean) {
        BlzHideOriginFrames(enable)
        this.originFramesHided = true
        return this
    }

    destroy() {
        BlzDestroyFrame(this.getHandle() as framehandle)
        super.destroy()
    }

    setPointCoords(
        point: FramePointType,
        relative: Frame,
        relativePoint: FramePointType,
        x: real,
        y: real
    ) {
        BlzFrameSetPoint(
            this.getHandle() as framehandle,
            point.getHandle() as framepointtype,
            relative.getHandle() as framehandle,
            relativePoint.getHandle() as framepointtype,
            x,
            y
        )
        return this
    }

    setPointPos(
        point: FramePointType,
        relative: Frame,
        relativePoint: FramePointType,
        p: Position
    ) {
        return this.setPointCoords(point, relative, relativePoint, p.x, p.y)
    }

    setAbsPointCoords(point: FramePointType, x: real, y: real) {
        BlzFrameSetAbsPoint(
            this.getHandle() as framehandle,
            point.getHandle() as framepointtype,
            x,
            y
        )
        return this
    }

    setAbsPointPos(point: FramePointType, p: Position) {
        return this.setAbsPointCoords(point, p.x, p.y)
    }

    clearPoints() {
        BlzFrameClearAllPoints(this.getHandle() as framehandle)
        return this
    }

    setAllPoints(relative: Frame) {
        BlzFrameSetAllPoints(this.getHandle() as framehandle, relative.getHandle() as framehandle)
        return this
    }

    setVisible(flag: boolean) {
        BlzFrameSetVisible(this.getHandle() as framehandle, flag)
        return this
    }

    isVisible(): boolean {
        return BlzFrameIsVisible(this.getHandle() as framehandle)
    }

    static fromName(name: string, createContext: integer) {
        return this.fromHandle(BlzGetFrameByName(name, Math.floor(createContext)))
    }

    getName(): string {
        return BlzFrameGetName(this.getHandle() as framehandle)
    }

    click() {
        BlzFrameClick(this.getHandle() as framehandle)
        return this
    }

    setText(text: string) {
        BlzFrameSetText(this.getHandle() as framehandle, text)
        return this
    }

    getText(): string {
        return BlzFrameGetText(this.getHandle() as framehandle)
    }

    addText(text: string) {
        BlzFrameAddText(this.getHandle() as framehandle, text)
        return this
    }

    setSizeLimitText(size: integer) {
        BlzFrameSetTextSizeLimit(this.getHandle() as framehandle, Math.floor(size))
        return this
    }

    getSizeLimitText(): integer {
        return BlzFrameGetTextSizeLimit(this.getHandle() as framehandle)
    }

    setTextColor(color: integer) {
        BlzFrameSetTextColor(this.getHandle() as framehandle, Math.floor(color))
        return this
    }

    setFocus(flag: boolean) {
        BlzFrameSetFocus(this.getHandle() as framehandle, flag)
        return this
    }

    setModel(modelFile: string, cameraIndex: integer) {
        BlzFrameSetModel(this.getHandle() as framehandle, modelFile, Math.floor(cameraIndex))
        return this
    }

    setEnable(flag: boolean) {
        BlzFrameSetEnable(this.getHandle() as framehandle, flag)
        return this
    }

    getEnable(): boolean {
        return BlzFrameGetEnable(this.getHandle() as framehandle)
    }

    setAlpha(alpha: integer) {
        BlzFrameSetAlpha(this.getHandle() as framehandle, Math.floor(alpha))
    }

    getAlpha(): integer {
        return BlzFrameGetAlpha(this.getHandle() as framehandle)
    }

    setSpriteAnimate(primaryProp: integer, flags: integer) {
        BlzFrameSetSpriteAnimate(
            this.getHandle() as framehandle,
            Math.floor(primaryProp),
            Math.floor(flags)
        )
        return this
    }

    setTexture(texFile: string, flag: integer, blend: boolean) {
        BlzFrameSetTexture(this.getHandle() as framehandle, texFile, Math.floor(flag), blend)
        return this
    }

    setScale(scale: real) {
        BlzFrameSetScale(this.getHandle() as framehandle, scale)
        return this
    }

    setTooltip(tooltip: Frame) {
        BlzFrameSetTooltip(this.getHandle() as framehandle, tooltip.getHandle() as framehandle)
        return this
    }

    cageMouse(enable: boolean) {
        BlzFrameCageMouse(this.getHandle() as framehandle, enable)
        return this
    }

    setValue(value: real) {
        BlzFrameSetValue(this.getHandle() as framehandle, value)
        return this
    }

    getValue(): real {
        return BlzFrameGetValue(this.getHandle() as framehandle)
    }

    setMinMaxValue(minValue: real, maxValue: real) {
        BlzFrameSetMinMaxValue(this.getHandle() as framehandle, minValue, maxValue)
        return this
    }

    setStepSize(stepSize: real) {
        BlzFrameSetStepSize(this.getHandle() as framehandle, stepSize)
        return this
    }

    setSize(width: real, height: real) {
        BlzFrameSetSize(this.getHandle() as framehandle, width, height)
        return this
    }

    setVertexColor(color: integer) {
        BlzFrameSetVertexColor(this.getHandle() as framehandle, Math.floor(color))
        return this
    }

    setLevel(level: integer) {
        BlzFrameSetLevel(this.getHandle() as framehandle, Math.floor(level))
        return this
    }

    setParent(parent: Frame) {
        BlzFrameSetParent(this.getHandle() as framehandle, parent.getHandle() as framehandle)
        return this
    }

    getParent() {
        return Frame.fromHandle(BlzFrameGetParent(this.getHandle() as framehandle))
    }

    setWidth(width: real) {
        BlzFrameSetSize(this.getHandle() as framehandle, width, this.getHeight())
        return this
    }

    getWidth(): real {
        return BlzFrameGetWidth(this.getHandle() as framehandle)
    }

    setFont(filename: string, height: real, flags: integer) {
        BlzFrameSetFont(this.getHandle() as framehandle, filename, height, Math.floor(flags))
        return this
    }

    setTextAlignment(vert: TextAlignType, horz: TextAlignType) {
        BlzFrameSetTextAlignment(
            this.getHandle() as framehandle,
            vert.getHandle() as textaligntype,
            horz.getHandle() as textaligntype
        )
        return this
    }

    setHeight(height: real) {
        BlzFrameSetSize(this.getHandle() as framehandle, this.getWidth(), height)
        return this
    }

    getHeight(): real {
        return BlzFrameGetHeight(this.getHandle() as framehandle)
    }

    setTextSizeLimit(size: integer) {
        BlzFrameSetTextSizeLimit(this.getHandle() as framehandle, Math.floor(size))
        return this
    }

    static fromHandle(handle: framehandle) {
        return this.getObject(handle) as Frame
    }

    static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrame())
    }

    static getEventText(): string {
        return BlzGetTriggerFrameText()
    }

    static getEventValue(): real {
        return BlzGetTriggerFrameValue()
    }

    static loadTOC(filename: string): boolean {
        return BlzLoadTOCFile(filename)
    }
}
