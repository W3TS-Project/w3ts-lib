/** @noSelfInFile **/
// @ts-nocheck

declare function AutomationSetTestType(testType: string): void
declare function AutomationTestStart(testName: string): void
declare function AutomationTestEnd(): void
declare function AutomationTestingFinished(): void

export abstract class AutomationTest {
    public static setType(testType: string) {
        AutomationSetTestType(testType)
        return this
    }

    public static start(testName: string) {
        AutomationTestStart(testName)
        return this
    }

    public static end() {
        AutomationTestEnd()
        return this
    }

    public static finish() {
        AutomationTestingFinished()
        return this
    }
}
