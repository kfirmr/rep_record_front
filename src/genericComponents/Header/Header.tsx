// External liberaries
import { FC } from "react";
import { useStyles } from "./Header.style";

interface IProps {
  text: string;
}

const Header: FC<IProps> = ({ text }) => {
  const styles = useStyles();
  return <div style={styles.container}>{text}</div>;
};

export default Header;
