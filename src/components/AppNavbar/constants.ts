// Interfaces
import { IGButtonProps } from "../../genericComponents/GenericButton/GenericButton";

interface IAppBarButton extends Omit<IGButtonProps, "onClick"> {
    key: string;
}

const FONT_SIZE = "10px";
const BUTTON_HEIGHT = "4vh";
const BUTTON_COLOR = "#FFFFFF";

export const APP_BAR_BUTTONS: IAppBarButton[] = [
    {
        key: "Home",
        text: "Home",
        height: BUTTON_HEIGHT,
        width: "10vw",
        color: BUTTON_COLOR,
        fontSize: FONT_SIZE,
    }, {
        width: "28vw",
        height: BUTTON_HEIGHT,
        color: BUTTON_COLOR,
        fontSize: FONT_SIZE,
        key: "NewWorkout",
        text: "New Workout",
    },
]