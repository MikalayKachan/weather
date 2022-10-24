import React, { useContext, useState } from 'react';

import { SideMenu } from 'components/SideMenu';

import styles from './Layout.module.css';
import { AppContext } from 'helpers/context';

type PropsType = {
  children: React.ReactNode;
  day?: boolean;
};

const Layout = ({ children }: PropsType) => {
  const { state, dispatch } = useContext(AppContext);

  const [isAutoThemeMode, setIsAutoThemeMode] = useState(true); //checkbox
  //const [isDayTheme, setIsDayTheme] = useState(true); //toggle

  const themeModeHandler = () => {
    if (!isAutoThemeMode) {
      dispatch({ type: 'SET_DAY_THEME', payload: state.isDayThemeAPI });
    }
    setIsAutoThemeMode(!isAutoThemeMode);
  };

  // const dayModeHandler = () => {
  //   setIsDayTheme(!isDayTheme);
  // };

  // const getTheme = (
  //   day: boolean | undefined,
  //   isAutoThemeMode: boolean,
  //   isDayTheme: boolean,
  // ) => {
  //   return isAutoThemeMode ? day : isDayTheme;
  // };
  //
  // const theme = getTheme(day, isAutoThemeMode, isDayTheme);

  return (
    <div className={state.isDayTheme ? styles.layoutDay : styles.layoutNight}>
      <SideMenu
        isAutoThemeMode={isAutoThemeMode}
        themeModeHandler={themeModeHandler}
      />
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Layout;
