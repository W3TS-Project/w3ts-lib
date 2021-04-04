/** @noSelfInFile **/
//@ts-nocheck

import { real } from "../utils"

declare function Preload(filename: string): void
declare function PreloadEnd(timeout: real): void
declare function PrealoadStart(): void
declare function PreloadRefresh(): void
declare function PreloadEndEx(): void

declare function PreloadGenClear(): void
declare function PreloadGenStart(): void
declare function PreloadGenEnd(filename: string): void
declare function Preloader(filename: string): void

export const preload = Preload
export const preloadEnd = PreloadEnd
export const preloadStart = PrealoadStart
export const preloadRefresh = PreloadRefresh
export const preloadEndEx = PreloadEndEx

export const preloadGenClear = PreloadGenClear
export const preloadGenStart = PreloadGenStart
export const preloadGenEnd = PreloadGenEnd
export const preloader = Preloader