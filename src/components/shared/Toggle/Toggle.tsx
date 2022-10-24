import React, { useContext } from 'react';
import styles from './Toggle.module.scss';
import { AppContext } from 'helpers/context';

type PropsType = {
  isAutoThemeMode: boolean;
  themeModeHandler: () => void;
};

const Toggle = ({ isAutoThemeMode, themeModeHandler }: PropsType) => {
  const { state, dispatch } = useContext(AppContext);

  const onToggleChange = () => {
    dispatch({ type: 'SET_DAY_THEME', payload: !state.isDayTheme });
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isAutoThemeMode}
        onChange={themeModeHandler}
      />
      {isAutoThemeMode && <span>Auto</span>}
      <div className={styles.vcToggleContainer}>
        <label className={styles.vcSwitch}>
          <input
            type="checkbox"
            className={styles.vcSwitchInput}
            checked={state.isDayTheme}
            onChange={onToggleChange}
            disabled={isAutoThemeMode}
          />
          <span
            className={styles.vcSwitchLabel}
            data-on="Day"
            data-off="Night"
          ></span>
          <span className={styles.vcHandle}></span>
        </label>
      </div>
    </>
  );
};

export default Toggle;
