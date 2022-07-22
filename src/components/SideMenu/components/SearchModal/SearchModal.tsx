import React, { ChangeEvent } from 'react';

import { Modal } from 'components/shared/Modal';
import { Loader } from 'components/shared/Loader';
import { Typography } from 'components/shared/Typography';

import { City } from '../City';

import { CityType } from './SearchModal.container';

import styles from './SearchModal.module.scss';

type PropsType = {
  isSearchModalOpen: boolean;
  onClose: () => void;
  searchValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  citiesListLoading: boolean;
  citiesList: CityType[];
  savedCitiesList: CityType[];
  onCityClick: (id: number) => void;
  onAddCityClick: (id: number) => void;
};

const SearchModal = ({
  isSearchModalOpen,
  onClose,
  searchValue,
  onInputChange,
  citiesListLoading,
  citiesList,
  savedCitiesList,
  onCityClick,
  onAddCityClick,
}: PropsType) => (
  <Modal open={isSearchModalOpen} onClose={onClose}>
    <Typography className={styles.modalHeader}>Find city:</Typography>
    <input
      type={'text'}
      className={styles.input}
      value={searchValue}
      autoFocus
      onChange={onInputChange}
    />
    {citiesListLoading ? (
      <Loader className={styles.loading} />
    ) : (
      <div className={styles.cityList}>
        {citiesList?.map((city) => (
          <City
            key={city.lat}
            {...city}
            savedCitiesList={savedCitiesList}
            onCityClick={onCityClick}
            onAddCityClick={onAddCityClick}
          />
        ))}
      </div>
    )}
  </Modal>
);

export default SearchModal;
