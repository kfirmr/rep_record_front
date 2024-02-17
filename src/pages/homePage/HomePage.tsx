// External liberaries
import { FC } from "react";

// Styles
import { useStyles } from "./homePage.style";

// Components
import Header from "../../genericComponents/Header/Header";
import AppNavbar from "../../components/AppNavbar/AppNavbar";

const HomePage: FC = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <AppNavbar />
      <div style={styles.body}>
        <Header text="My workouts" />
      </div>
    </div>
  );
};

export default HomePage;
