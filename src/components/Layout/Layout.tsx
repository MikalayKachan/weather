import React, { useState } from 'react';

import { SideMenu } from 'components/SideMenu';

import styles from './Layout.module.css';

type PropsType = {
  children: React.ReactNode;
  day?: boolean;
};

const Layout = ({ children, day }: PropsType) => {
  const [isAutoThemeMode, setIsAutoThemeMode] = useState(true); //checkbox
  const [isDayTheme, setIsDayTheme] = useState(true); //toggle

  const themeModeHandler = () => {
    if (!isAutoThemeMode) {
      day && setIsDayTheme(day);
    }
    setIsAutoThemeMode(!isAutoThemeMode);
  };

  const dayModeHandler = () => {
    setIsDayTheme(!isDayTheme);
  };

  const getTheme = (
    day: boolean | undefined,
    isAutoThemeMode: boolean,
    isDayTheme: boolean,
  ) => {
    return isAutoThemeMode ? day : isDayTheme;
  };

  const theme = getTheme(day, isAutoThemeMode, isDayTheme);

  return (
    <div className={theme ? styles.layoutDay : styles.layoutNight}>
      <SideMenu
        isAutoThemeMode={isAutoThemeMode}
        themeModeHandler={themeModeHandler}
        isDayTheme={isDayTheme}
        dayModeHandler={dayModeHandler}
      />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Layout;
