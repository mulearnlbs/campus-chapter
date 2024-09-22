import styles from "./Events.module.css";
import data from "../../../data.json";

const Events = () => {
  return (
    <div className={styles.events}>
      <h2>Our Event Journey</h2>
      
     
        <div className={styles.subContent}>
          {data.events.slice(1).map((event, index) => {
            return (
              <div className={styles.card + " " + styles.small} key={index}>
                <div className={styles.content}>
                  <div className={styles.date}>
                    <span>{event.month}</span>
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.text}>
                    <strong>{event.head}</strong>
                    <span>{event.para}</span>
                  </div>
                </div>
                <img src={event.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
