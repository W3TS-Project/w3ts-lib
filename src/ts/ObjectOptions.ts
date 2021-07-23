export abstract class ObjectOptions {
    static entries(obj: { [key: string]: any}): [string, any][] {
        let result: [string, any][] = []
        for (const key of Object.keys(obj)) {
            result.push([key, obj[key]])
        }
        return result
    }

    static values(obj: { [key: string]: any}): any[] {
        let result = []
        for (const key of Object.keys(obj)) {
            result.push(obj[key])
        }
        return result
    }
}