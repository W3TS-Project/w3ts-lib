import { Dialog } from "../../Dialog"

export class DialogEventResponse {
    protected dialogClicked: Dialog

    public constructor() {
        this.dialogClicked = Dialog.getClicked()
    }

    public getDialogClicked() {
        return this.dialogClicked
    }
}
