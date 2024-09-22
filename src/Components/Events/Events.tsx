import styles from "./Events.module.css";
import data from "../../../data.json";

const Events = () => {
  return (
    <div className={styles.events}>
      <h2>Our Event Journey</h2>
      <div className={styles.innerDiv}>
        <div className={styles.card + " " + styles.small}>
          <div className={styles.content}>
            <div className={styles.date}>
              <span>{data["events"][0].month}</span>
              <span>{data["events"][0].date}</span>
            </div>
            <div className={styles.text}>
              <strong>{data["events"][0].head}</strong>
              <span>{data["events"][0].para}</span>
            </div>
          </div>
          <img src={data["events"][0].img} alt="" />
        </div>
     
       
      </div>
    </div>
  );
};

export default Events;
