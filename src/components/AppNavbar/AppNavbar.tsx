// External liberaries
import { FC } from "react";

// Constants
import { APP_BAR_BUTTONS } from "./constants";

// Styles
import { useStyles } from "./AppNavbar.style";

// Components
import { AppBar } from "@mui/material";
import GenericButton from "../../genericComponents/GenericButton/GenericButton";

const AppNavbar: FC = () => {
    const styles = useStyles();

    return (
        <AppBar style={styles.container}>
            {APP_BAR_BUTTONS.map(buttonProps => {
                return (
                    <GenericButton
                        key={buttonProps.key}
                        text={buttonProps.text}
                        color={buttonProps.color}
                        width={buttonProps.width}
                        height={buttonProps.height}
                        onClick={buttonProps.onClick}
                        fontSize={buttonProps.fontSize}
                    />
                )
            })}
        </AppBar>
    )
}

export default AppNavbar;