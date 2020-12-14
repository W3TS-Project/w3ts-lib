/** @noSelfInFile **/
// @ts-nocheck

import { Handle } from "./handle"

declare function BlzCreateFrame(
    name: string,
    owner: framehandle,
    priority: number,
    createContext: number
): framehandle
declare function BlzCreateSimpleFrame(
    name: string,
    owner: framehandle,
    createContext: number
): framehandle
declare function BlzCreateFrameByType(
    typeName: string,
    name: string,
    owner: framehandle,
    inherits: string,
    createContext: number
): framehandle
declare function BlzDestroyFrame(frame: framehandle): void
declare function BlzFrameSetPoint(
    frame: framehandle,
    point: framepointtype,
    relative: framehandle,
    relativePoint: framepointtype,
    x: number,
    y: number
): void
declare function BlzFrameSetAbsPoint(
    frame: framehandle,
    point: framepointtype,
    x: number,
    y: number
): void
declare function BlzFrameClearAllPoints(frame: framehandle): void
declare function BlzFrameSetAllPoints(frame: framehandle, relative: framehandle): void
declare function BlzFrameSetVisible(frame: framehandle, visible: boolean): void
declare function BlzFrameIsVisible(frame: framehandle): boolean
declare function BlzGetFrameByName(name: string, createContext: number): framehandle
declare function BlzFrameGetName(frame: framehandle): string
declare function BlzFrameClick(frame: framehandle): void
declare function BlzFrameSetText(frame: framehandle, text: string): void
declare function BlzFrameGetText(frame: framehandle): string
declare function BlzFrameAddText(frame: framehandle, text: string): void
declare function BlzFrameSetTextSizeLimit(frame: framehandle, size: number): void
declare function BlzFrameGetTextSizeLimit(frame: framehandle): number
declare function BlzFrameSetTextColor(frame: framehandle, color: number): void
declare function BlzFrameSetFocus(frame: framehandle, flag: boolean): void
declare function BlzFrameSetModel(frame: framehandle, modelFile: string, cameraIndex: number): void
declare function BlzFrameSetEnable(frame: framehandle, enabled: boolean): void
declare function BlzFrameGetEnable(frame: framehandle): boolean
declare function BlzFrameSetAlpha(frame: framehandle, alpha: number): void
declare function BlzFrameGetAlpha(frame: framehandle): number
declare function BlzFrameSetSpriteAnimate(
    frame: framehandle,
    primaryProp: number,
    flags: number
): void
declare function BlzFrameSetTexture(
    frame: framehandle,
    texFile: string,
    flag: number,
    blend: boolean
): void
declare function BlzFrameSetScale(frame: framehandle, scale: number): void
declare function BlzFrameSetTooltip(frame: framehandle, tooltip: framehandle): void
declare function BlzFrameCageMouse(frame: framehandle, enable: boolean): void
declare function BlzFrameSetValue(frame: framehandle, value: number): void
declare function BlzFrameGetValue(frame: framehandle): number
declare function BlzFrameSetMinMaxValue(
    frame: framehandle,
    minValue: number,
    maxValue: number
): void
declare function BlzFrameSetStepSize(frame: framehandle, stepSize: number): void
declare function BlzFrameSetSize(frame: framehandle, width: number, height: number): void
declare function BlzFrameSetVertexColor(frame: framehandle, color: number): void
declare function BlzFrameSetLevel(frame: framehandle, level: number): void
declare function BlzFrameSetParent(frame: framehandle, parent: framehandle): void
declare function BlzFrameGetParent(frame: framehandle): framehandle
declare function BlzFrameGetHeight(frame: framehandle): number
declare function BlzFrameGetWidth(frame: framehandle): number
declare function BlzFrameSetFont(
    frame: framehandle,
    fileName: string,
    height: number,
    flags: number
): void
declare function BlzFrameSetTextAlignment(
    frame: framehandle,
    vert: textaligntype,
    horz: textaligntype
): void
declare function BlzTriggerRegisterFrameEvent(
    whichTrigger: trigger,
    frame: framehandle,
    eventId: frameeventtype
): event
declare function BlzGetTriggerFrame(): framehandle
declare function BlzGetTriggerFrameEvent(): frameeventtype
declare function BlzGetTriggerFrameValue(): number
declare function BlzGetTriggerFrameText(): string
declare function BlzEnableUIAutoPosition(enable: boolean): void
declare function BlzGetOriginFrame(frameType: originframetype, index: number): framehandle
declare function BlzHideOriginFrames(enable: boolean): void
declare function BlzLoadTOCFile(TOCFile: string): boolean

export class Frame extends Handle<framehandle> {
    constructor(name: string, owner: Frame, priority: number, createContext: number)
    /**
     * Creates a SimpleFrame.
     * @param name
     * @param owner
     * @param createContext
     */
    constructor(name: string, owner: Frame, createContext: number)
    constructor(name: string, owner: Frame, priority: number, createContext?: number) {
        if (Handle.initFromHandle()) {
            super()
        } else {
            if (!createContext) {
                super(BlzCreateSimpleFrame(name, owner.handle, priority))
            } else {
                super(BlzCreateFrame(name, owner.handle, priority, createContext))
            }
        }
    }

    public set alpha(alpha: number) {
        BlzFrameSetAlpha(this.handle, alpha)
    }

    public get alpha() {
        return BlzFrameGetAlpha(this.handle)
    }

    public set enabled(flag: boolean) {
        BlzFrameSetEnable(this.handle, flag)
    }

    public get enabled() {
        return BlzFrameGetEnable(this.handle)
    }

    public set height(height: number) {
        BlzFrameSetSize(this.handle, this.width, height)
    }

    public get height() {
        return BlzFrameGetHeight(this.handle)
    }

    public set parent(parent: Frame) {
        BlzFrameSetParent(this.handle, parent.handle)
    }

    public get parent() {
        return Frame.fromHandle(BlzFrameGetParent(this.handle))
    }

    public set text(text: string) {
        BlzFrameSetText(this.handle, text)
    }

    public get text() {
        return BlzFrameGetText(this.handle)
    }

    public set textSizeLimit(size: number) {
        BlzFrameSetTextSizeLimit(this.handle, size)
    }

    public get textSizeLimit() {
        return BlzFrameGetTextSizeLimit(this.handle)
    }

    public set value(value: number) {
        BlzFrameSetValue(this.handle, value)
    }

    public get value() {
        return BlzFrameGetValue(this.handle)
    }

    public set visible(flag: boolean) {
        BlzFrameSetVisible(this.handle, flag)
    }

    public get visible() {
        return BlzFrameIsVisible(this.handle)
    }

    public set width(width: number) {
        BlzFrameSetSize(this.handle, width, this.height)
    }

    public get width() {
        return BlzFrameGetWidth(this.handle)
    }

    public setAlpha(alpha: number) {
        BlzFrameSetAlpha(this.handle, alpha)
        return this
    }

    public setEnabled(flag: boolean) {
        BlzFrameSetEnable(this.handle, flag)
        return this
    }

    public setHeight(height: number) {
        BlzFrameSetSize(this.handle, this.width, height)
        return this
    }

    public setParent(parent: Frame) {
        BlzFrameSetParent(this.handle, parent.handle)
        return this
    }

    public setText(text: string) {
        BlzFrameSetText(this.handle, text)
        return this
    }

    public setTextSizeLimit(size: number) {
        BlzFrameSetTextSizeLimit(this.handle, size)
        return this
    }

    public setValue(value: number) {
        BlzFrameSetValue(this.handle, value)
        return this
    }

    public setVisible(flag: boolean) {
        BlzFrameSetVisible(this.handle, flag)
        return this
    }

    public setWidth(width: number) {
        BlzFrameSetSize(this.handle, width, this.height)
        return this
    }

    public addText(text: string) {
        BlzFrameAddText(this.handle, text)
        return this
    }

    public cageMouse(enable: boolean) {
        BlzFrameCageMouse(this.handle, enable)
        return this
    }

    public clearPoints() {
        BlzFrameClearAllPoints(this.handle)
        return this
    }

    public click() {
        BlzFrameClick(this.handle)
        return this
    }

    public destroy() {
        BlzDestroyFrame(this.handle)
        return this
    }

    public setAbsPoint(point: framepointtype, x: number, y: number) {
        BlzFrameSetAbsPoint(this.handle, point, x, y)
        return this
    }

    public setAllPoints(relative: Frame) {
        BlzFrameSetAllPoints(this.handle, relative.handle)
        return this
    }

    public setFocus(flag: boolean) {
        BlzFrameSetFocus(this.handle, flag)
        return this
    }

    public setFont(filename: string, height: number, flags: number) {
        BlzFrameSetFont(this.handle, filename, height, flags)
        return this
    }

    public setLevel(level: number) {
        BlzFrameSetLevel(this.handle, level)
        return this
    }

    public setMinMaxValue(minValue: number, maxValue: number) {
        BlzFrameSetMinMaxValue(this.handle, minValue, maxValue)
        return this
    }

    public setModel(modelFile: string, cameraIndex: number) {
        BlzFrameSetModel(this.handle, modelFile, cameraIndex)
        return this
    }

    public setPoint(
        point: framepointtype,
        relative: Frame,
        relativePoint: framepointtype,
        x: number,
        y: number
    ) {
        BlzFrameSetPoint(this.handle, point, relative.handle, relativePoint, x, y)
        return this
    }

    public setScale(scale: number) {
        BlzFrameSetScale(this.handle, scale)
        return this
    }

    public setSize(width: number, height: number) {
        BlzFrameSetSize(this.handle, width, height)
        return this
    }

    public setSpriteAnimate(primaryProp: number, flags: number) {
        BlzFrameSetSpriteAnimate(this.handle, primaryProp, flags)
        return this
    }

    public setStepSize(stepSize: number) {
        BlzFrameSetStepSize(this.handle, stepSize)
        return this
    }

    public setTextColor(color: number) {
        BlzFrameSetTextColor(this.handle, color)
        return this
    }

    public setTexture(texFile: string, flag: number, blend: boolean) {
        BlzFrameSetTexture(this.handle, texFile, flag, blend)
        return this
    }

    public setTooltip(tooltip: Frame) {
        BlzFrameSetTooltip(this.handle, tooltip.handle)
        return this
    }

    public setVertexColor(color: number) {
        BlzFrameSetVertexColor(this.handle, color)
        return this
    }

    public static autoPosition(enable: boolean) {
        BlzEnableUIAutoPosition(enable)
    }

    public static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrame())
    }

    public static fromHandle(handle: framehandle): Frame {
        return this.getObject(handle)
    }

    public static fromName(name: string, createContext: number) {
        return this.fromHandle(BlzGetFrameByName(name, createContext))
    }

    public static fromOrigin(frameType: originframetype, index: number) {
        return this.fromHandle(BlzGetOriginFrame(frameType, index))
    }

    public static getEventHandle() {
        return BlzGetTriggerFrameEvent()
    }

    public static getEventText() {
        return BlzGetTriggerFrameValue()
    }

    public static getEventValue() {
        return BlzGetTriggerFrameValue()
    }

    public static hideOrigin(enable: boolean) {
        BlzHideOriginFrames(enable)
    }

    public static loadTOC(filename: string) {
        return BlzLoadTOCFile(filename)
    }
}
