import { ArrowLeft } from "../../icons/ArrowLeft";
import styles from "./Header.module.scss";

export const Header = ({ title, subTitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowBack}>
        <ArrowLeft />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
};
