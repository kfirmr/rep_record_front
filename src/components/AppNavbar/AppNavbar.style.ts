// styles
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
    createStyles({
        container: {
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }
    })