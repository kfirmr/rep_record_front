// External liberaries
import { FC } from "react"

// Styles
import { useStyles } from "./genericButton.style";

//Components
import { Button, Typography } from "@mui/material";

export interface IGButtonProps {
    text: string;
    width: string;
    color: string;
    height: string;
    fontSize: string;
    onClick: () => void;
}

const GenericButton: FC<IGButtonProps> = ({ width, color, height, onClick, text, fontSize }) => {
    const styles = useStyles({ width, color, height, fontSize });

    return (
        <Button
            onClick={onClick}
            style={styles.container}
        >
            <Typography style={styles.text}>
                {text}
            </Typography>
        </Button>
    )
}

export default GenericButton;