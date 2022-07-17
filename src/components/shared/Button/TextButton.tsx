import React from 'react';

import cn from 'classnames';

import styles from './TextButton.module.css';

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const TextButton = ({ children, className }: PropsType) => {
  return <button className={cn(className, styles.button)}>{children}</button>;
};

export default TextButton;
