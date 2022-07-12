import React from 'react';
import cn from 'classnames';

import styles from './IconButton.module.css';

type PropsType = {
  icon: string;
  onClick?: () => void;
  buttonStyle?: string;
  iconStyle?: string;
};

const IconButton = ({ icon, onClick, buttonStyle, iconStyle }: PropsType) => {
  return (
    <button className={cn(styles.iconButton, buttonStyle)} onClick={onClick}>
      <img src={icon} className={cn(styles.icons, iconStyle)} />
    </button>
  );
};

export default IconButton;
