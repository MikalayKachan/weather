import React from "react";
import styles from "./Now.module.css";

const Now = () => {
  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <div>City</div>
        <div>Temperature</div>
      </div>
      <div className={styles.dayPart}>
        <div>Today</div>
        <div>Date</div>
      </div>
      <div className={styles.day}>
        <div className={styles.dayPart}>
          <div>Morning</div>
          <div>Temperature</div>
        </div>
        <div className={styles.dayPart}>
          <div>Day</div>
          <div>Temperature</div>
        </div>
        <div className={styles.dayPart}>
          <div>Evening</div>
          <div>Temperature</div>
        </div>
        <div className={styles.dayPart}>
          <div>Night</div>
          <div>Temperature</div>
        </div>
      </div>
    </div>
  );
};

export default Now;
