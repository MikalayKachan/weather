import React from 'react';

import styles from './IconButton.module.css';

type PropsType = {
  icon: string;
};

const IconButton = ({ icon }: PropsType) => {
  return (
    <button className={styles.iconButton}>
      <img src={icon} className={styles.icons} />
    </button>
  );
};

export default IconButton;
