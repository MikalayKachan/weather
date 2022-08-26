import React from 'react';
import styles from './Toggle.module.scss';

const Toggle = () => {
  return (
    <div className={styles.vcToggleContainer}>
      <label className={styles.vcSwitch}>
        <input
          type="checkbox"
          className={styles.vcSwitchInput}
          //checked={props.isChecked}
        />
        <span
          className={styles.vcSwitchLabel}
          data-on="Day"
          data-off="Night"
        ></span>
        <span className={styles.vcHandle}></span>
      </label>
    </div>
  );
};

export default Toggle;
