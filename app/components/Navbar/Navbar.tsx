import ThemeSwitcher from "../helpers/ThemeSwitcher/ThemeSwitcher";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.brandName}>CozyDo</h1>
      <ThemeSwitcher />
    </div>
  );
};
export default Navbar;
