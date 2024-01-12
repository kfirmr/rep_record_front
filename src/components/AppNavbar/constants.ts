// External liberaries
import { useNavigate } from "react-router";

// Interfaces
import { IGButtonProps } from "../../genericComponents/GenericButton/GenericButton";

const navigate = useNavigate();

interface IAppBarButton extends IGButtonProps {
    key: string;
}

export const APP_BAR_BUTTONS: IAppBarButton[] = [
    {
        key: "Home",
        text: "Home",
        height: "20px",
        width: "50px",
        color: "#0000FF",
        fontSize: "10px",
        onClick: () => navigate("/home")
    }, {
        width: "50px",
        height: "20px",
        color: "#0000FF",
        fontSize: "10px",
        key: "NewWorkout",
        text: "New Workout",
        onClick: () => navigate("/home")
    },
]