import { PlayerSlotState } from "../../API/fields/player/PlayerSlotState"

export abstract class PlayerSlotStates {
    static readonly EMPTY = PlayerSlotState.convert(0)
    static readonly PLAYING = PlayerSlotState.convert(1)
    static readonly LEFT = PlayerSlotState.convert(2)
}
