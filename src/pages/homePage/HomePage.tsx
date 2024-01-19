// External liberaries
import { FC } from "react";

// Styles
import { useStyles } from "./homePage.style";

// Components
import AppNavbar from "../../components/AppNavbar/AppNavbar"

const HomePage: FC = () => {
    const styles = useStyles();
    
    return (
        <div style={styles.container}>
            <AppNavbar />
        </div>
    )
}

export default HomePage;