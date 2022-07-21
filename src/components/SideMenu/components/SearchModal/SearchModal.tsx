import React, { ChangeEvent } from 'react';

import { Modal } from 'components/shared/Modal';
import { Typography } from 'components/shared/Typography';

import { City } from '../City';

import { CityType } from './SearchModal.container';

import styles from './SearchModal.module.scss';
import { Loader } from 'components/shared/Loader';

type PropsType = {
  isSearchModalOpen: boolean;
  onClose: () => void;
  searchValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  citiesListLoading: boolean;
  citiesList: CityType[];
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
            onCityClick={onCityClick}
            onAddCityClick={onAddCityClick}
          />
        ))}
      </div>
    )}
  </Modal>
);

export default SearchModal;
