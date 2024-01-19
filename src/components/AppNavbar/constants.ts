// Interfaces
import { IGButtonProps } from "../../genericComponents/GenericButton/GenericButton";

interface IAppBarButton extends Omit<IGButtonProps, "onClick"> {
    key: string;
}

export const APP_BAR_BUTTONS: IAppBarButton[] = [
    {
        key: "Home",
        text: "Home",
        height: "4vh",
        width: "10vw",
        color: "#FFFFFF",
        fontSize: "10px",
    }, {
        width: "28vw",
        height: "4vh",
        color: "#FFFFFF",
        fontSize: "10px",
        key: "NewWorkout",
        text: "New Workout",
    },
]