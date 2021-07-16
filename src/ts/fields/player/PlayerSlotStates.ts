import { PlayerSlotState } from "../../API/fields/player/PlayerSlotState"

export abstract class PlayerSlotStates {
    public static readonly EMPTY = new PlayerSlotState(0)
    public static readonly PLAYING = new PlayerSlotState(1)
    public static readonly LEFT = new PlayerSlotState(2)
}
