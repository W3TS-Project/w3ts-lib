import { code } from "./utils"

export abstract class ErrorHandling {
    public static getHandledCallback(callback: code) {
        return () => {
            const result = pcall(callback)
            if (!result[0]) {
                print(result[1])
            } else {
                return result[1]
            }
        }
    }
}