// Utils
import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
    createStyles({
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
        },
        body: {
            paddingTop: "8vh"
        }
    })