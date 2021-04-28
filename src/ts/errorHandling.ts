import { real } from "./utils"

export const getHandledCallback = (callback: () => void) => () => {
    const result = pcall(callback)
    if (!result[0]) {
        print(result[1])
    } else {
        return result[1]
    }
}