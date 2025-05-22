import styles from "./DayBlock.module.css";

const DayBlock = ({day}: any) => {
  return (
    <div className={styles.day}>
      <p className={styles.dayNum}>{day}</p>
    </div>
  );
};
export default DayBlock;