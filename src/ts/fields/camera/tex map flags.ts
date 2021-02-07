/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertTexMapFlags = (i: number) => texmapflags

const c = ConvertTexMapFlags

export const TexMapFlags = {
    None: c(0),
    WrapU: c(1),
    WrapV: c(2),
    WrapUV: c(3)
}
