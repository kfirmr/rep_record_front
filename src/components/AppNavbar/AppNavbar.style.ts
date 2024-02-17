// styles
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
    createStyles({
        container: {
            paddingTop: "18px",
            width: "100vw",
            height: "8vh",
            display: 'flex',
            flexDirection: 'row',
        },
        buttonSpacer: {
            marginLeft: "25px",
        }
    })