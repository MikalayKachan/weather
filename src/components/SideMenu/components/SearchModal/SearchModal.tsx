import React, { FormEvent, useEffect, useState } from 'react';

import { API } from 'api/api';

import { Modal } from 'components/shared/Modal';
import { Typography } from 'components/shared/Typography';

import City from './components/City';

import styles from './SearchModal.module.scss';

export type CityType = {
  id: number;
  name: string;
  country: string;
  lat: number;
  lon: number;
};

type PropsType = {
  isSearchModalOpen: boolean;
  onClose: () => void;
};

const SearchModal = ({ isSearchModalOpen, onClose }: PropsType) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedCityList, setSearchedCityList] = useState<CityType[]>([]);

  const inputHandler = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (searchValue !== '') {
      API.getCitiesList(searchValue).then((res) => {
        console.log(res);
        let resCityList = [] as CityType[];
        res.map(({ name, country, lat, lon }: any) => {
          resCityList.push({
            id: lat,
            name,
            country,
            lat,
            lon,
          });
        });
        setSearchedCityList(resCityList);
      });
    } else {
      setSearchedCityList([]);
    }
  }, [searchValue]);

  return (
    <Modal open={isSearchModalOpen} onClose={onClose}>
      <Typography className={styles.modalHeader}>Find city:</Typography>
      <input
        type={'text'}
        className={styles.input}
        value={searchValue}
        autoFocus
        onInput={inputHandler}
      />
      <div className={styles.cityList}>
        {searchedCityList.map((city) => (
          <City key={city.id} city={city} />
          // <>
          //   <NavLink to={'/city' + '/lat=' + city.lat + '/lon=' + city.lon}>
          //     <Typography key={city.id} variant={'h5'} className={styles.city}>
          //       {city.name + ', ' + city.country}
          //     </Typography>
          //   </NavLink>
          //   <IconButton
          //     icon={Add}
          //     buttonStyle={styles.buttonStyle}
          //     iconStyle={styles.iconStyle}
          //   />
          // </>
        ))}
      </div>
    </Modal>
  );
};

export default SearchModal;
