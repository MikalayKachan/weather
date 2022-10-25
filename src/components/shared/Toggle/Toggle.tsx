import React, { useContext } from 'react';
import styles from './Toggle.module.scss';
import { AppContext } from 'helpers/context';

const Toggle = () => {
  const { state, dispatch } = useContext(AppContext);
  const isDay = state.isDayTheme !== null ? state.isDayTheme : true;

  const onCheckboxChange = () => {
    dispatch({ type: 'SET_THEME_AUTO_MODE', payload: !state.themeAutoMode });
    dispatch({ type: 'SET_DAY_THEME', payload: state.isDayThemeAPI });
  };
  const onToggleChange = () => {
    dispatch({ type: 'SET_DAY_THEME', payload: !state.isDayTheme });
  };

  return (
    <>
      <input
        type="checkbox"
        checked={state.themeAutoMode}
        onChange={onCheckboxChange}
      />
      {state.themeAutoMode && <span>Auto</span>}
      <div className={styles.vcToggleContainer}>
        <label className={styles.vcSwitch}>
          <input
            type="checkbox"
            className={styles.vcSwitchInput}
            checked={isDay}
            onChange={onToggleChange}
            disabled={state.themeAutoMode}
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
