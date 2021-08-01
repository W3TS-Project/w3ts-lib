import { DialogButton } from "../../DialogButton"

export class DialogButtonEventResponse {
    protected buttonClicked: DialogButton

    public constructor() {
        this.buttonClicked = DialogButton.getClicked()
    }

    public getButtonClicked() {
        return this.buttonClicked
    }
}
