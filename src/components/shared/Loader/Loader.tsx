import React from 'react';
import cn from 'classnames';
import styles from './Loader.module.scss';

const Loader = ({ className }: { className?: string }) => {
  return <div className={cn(styles.loading, className)}></div>;
};

export default Loader;
