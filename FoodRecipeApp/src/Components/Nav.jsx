import logo from "../Imgs/FoodLogo.png";
import styles from "./nav.module.css";
export default function Nav()
{
    return <div className={styles.nav}><img className={styles.logo} src={logo}/> <span className={styles.Appname}>FoodApp</span></div>
}