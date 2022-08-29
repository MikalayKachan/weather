import React from 'react';

import { NavLink } from 'react-router-dom';

import Home from 'assets/icons/Home.svg';
import Search from 'assets/icons/Search.svg';
import Delete from 'assets/icons/Delete.svg';

import { ROUTES } from 'constants/routes';

import { IconButton } from 'components/shared/IconButton';
import { Typography } from 'components/shared/Typography';

import { CityType } from 'components/SideMenu/components/SearchModal/SearchModal.container';

import styles from './SideMenu.module.scss';
import Toggle from 'components/shared/Toggle/Toggle';

type PropsType = {
  cities: CityType[];
  onSearchClick: () => void;
  onCityClick: (lat: number, lon: number) => void;
  onDeleteCityClick: (lat: number) => void;
  isAutoThemeMode: boolean;
  themeModeHandler: () => void;
  isDayTheme: boolean;
  dayModeHandler: () => void;
};

const SideMenu = ({
  cities,
  onSearchClick,
  onCityClick,
  onDeleteCityClick,
  isAutoThemeMode,
  themeModeHandler,
  isDayTheme,
  dayModeHandler,
}: PropsType) => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.iconsLine}>
        <NavLink to={ROUTES.ROOT}>
          <IconButton icon={Home} />
        </NavLink>
        <IconButton icon={Search} onClick={onSearchClick} />
      </div>
      <div className={styles.cities}>
        {cities.map((city) => (
          <div key={city.lat} className={styles.cityContainer}>
            <Typography
              className={styles.city}
              variant={'h5'}
              onClick={() => onCityClick(city.lat, city.lon)}
            >
              {city.name}
            </Typography>
            <IconButton
              icon={Delete}
              buttonStyle={styles.deleteButton}
              iconStyle={styles.deleteIcon}
              onClick={() => onDeleteCityClick(city.lat)}
            />
          </div>
        ))}
      </div>
      <div className={styles.iconsLine}>
        <Toggle
          isAutoThemeMode={isAutoThemeMode}
          themeModeHandler={themeModeHandler}
          isDayTheme={isDayTheme}
          dayModeHandler={dayModeHandler}
        />
      </div>
    </div>
  );
};

export default SideMenu;
