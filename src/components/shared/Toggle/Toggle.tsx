import React from 'react';
import styles from './Toggle.module.scss';

type PropsType = {
  isAutoThemeMode: boolean;
  themeModeHandler: () => void;
  isDayTheme: boolean;
  dayModeHandler: () => void;
};

const Toggle = ({
  isAutoThemeMode,
  themeModeHandler,
  isDayTheme,
  dayModeHandler,
}: PropsType) => {
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
            checked={isDayTheme}
            onChange={dayModeHandler}
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
