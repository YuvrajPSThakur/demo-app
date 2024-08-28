import styles from "./CarouselItem.module.scss";
import Fanta from "../../assets/Fanta.png";

export const CarouselItem = () => {
  return (
    <div className={styles.container}>
      <img height={80} src={Fanta} alt='container' />
      <div className={styles.infoContainer}>
        <div className={styles.title}>Fanta</div>
        <div className={styles.subTitle}>$89</div>
      </div>
    </div>
  );
};
