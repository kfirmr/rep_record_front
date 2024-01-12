import { createStyles } from "../../styles/create-styles"

interface IProps {
    width: string;
    height: string;
    color: string;
    fontSize: string;
}

export const useStyles = ({ width, height, color, fontSize }: IProps) =>
    createStyles({
        container: {
            width: width,
            height: height,
            borderRadius: 15,
            backgroundColor: color
        },
        text: {
            fontSize: fontSize
        }
    })