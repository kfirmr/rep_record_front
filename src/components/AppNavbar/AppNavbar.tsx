// External liberaries
import { FC } from "react";
import { useNavigate } from "react-router";

// Constants
import { ROUTES } from "../../router/routes";
import { APP_BAR_BUTTONS } from "./constants";

// Styles
import { useStyles } from "./AppNavbar.style";

// Components
import { AppBar } from "@mui/material";
import GenericButton from "../../genericComponents/GenericButton/GenericButton";

const AppNavbar: FC = () => {
    const styles = useStyles();

    const navigate = useNavigate();

    return (
        <AppBar style={styles.container}>
            {APP_BAR_BUTTONS.map(buttonProps => {
                return (
                    <div
                        key={buttonProps.key}
                        style={styles.buttonSpacer}
                    >
                        <GenericButton
                            text={buttonProps.text}
                            color={buttonProps.color}
                            width={buttonProps.width}
                            height={buttonProps.height}
                            onClick={
                                () => buttonProps.text === "Home" ?
                                    navigate(ROUTES.HOME) :
                                    navigate(ROUTES.CREATE)
                            }
                            fontSize={buttonProps.fontSize}
                        />
                    </div>
                )
            })}
        </AppBar>
    )
}

export default AppNavbar;