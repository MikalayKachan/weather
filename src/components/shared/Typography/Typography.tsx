import React from 'react';
import cn from 'classnames';
import styles from './Typography.module.scss';

const VARIANTS = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
};

const COLORS = {
  primary: styles.primaryColor,
  dark: styles.darkColor,
};

const SHADOW = {
  withShadow: styles.withShadow,
  withoutShadow: styles.withoutShadow,
};

type PropsType = {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  color: 'primary' | 'dark';
  shadow: 'withShadow' | 'withoutShadow';
  className?: string;
};

const Typography = ({
  children,
  variant,
  color,
  shadow,
  className,
}: PropsType) => {
  return (
    <p
      className={cn(
        styles.typography,
        VARIANTS[variant],
        COLORS[color],
        SHADOW[shadow],
        className,
      )}
    >
      {children}
    </p>
  );
};

Typography.defaultProps = {
  variant: 'h4',
  color: 'primary',
  shadow: 'withShadow',
};

export default Typography;
