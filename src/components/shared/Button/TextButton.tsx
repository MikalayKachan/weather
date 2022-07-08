import React from 'react';

import styles from './TextButton.module.css';

type PropsType = {
  text: string;
};

const TextButton = ({ text }: PropsType) => {
  return <button className={styles.button}>{text}</button>;
};

export default TextButton;
