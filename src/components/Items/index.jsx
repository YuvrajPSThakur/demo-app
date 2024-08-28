import styles from "./items.module.scss";
import Burger from "../../assets/Burger.png";

export const Item = ({ imageSrc = "Burger", name, price, calorie }) => {
  return (
    <div className={styles.itemContainer}>
      <img
        src={Burger}
        alt={name}
        height={80}
        width={80}
        className={styles.itemImage}
      />
      <div className={styles.itemInfo}>
        <div>
          <h3 className={styles.itemName}>{name}</h3>
          <div className={styles.itemCalorie}>{calorie} calories</div>
        </div>

        <div className={styles.itemPrice}>${price}</div>
        <div className={styles.itemAddToCart}><div >-</div>1 <div>+</div></div>
      </div>
    </div>
  );
};
