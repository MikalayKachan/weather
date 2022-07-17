import React from 'react';

import { Modal } from 'components/shared/Modal';
import { Typography } from 'components/shared/Typography';

import styles from './SearchModal.module.scss';

type PropsType = {
  isSearchModalOpen: boolean;
  onClose: () => void;
};

const SearchModal = ({ isSearchModalOpen, onClose }: PropsType) => {
  const foundCityList = [
    { id: '1', name: 'Brest', country: 'BY' },
    { id: '2', name: 'Brest', country: 'FR' },
    { id: '3', name: 'Bremen', country: 'DE' },
    { id: '4', name: 'Brugge', country: 'BE' },
    { id: '5', name: 'Bryansk', country: 'RU' },
  ];

  return (
    <Modal open={isSearchModalOpen} onClose={onClose}>
      <Typography className={styles.modalHeader}>Find city:</Typography>
      <input type={'text'} className={styles.input} autoFocus />
      <div className={styles.cityList}>
        {foundCityList.map((city) => {
          return (
            <Typography key={city.id} variant={'h5'} className={styles.city}>
              {city.name}, {city.country}
            </Typography>
          );
        })}
      </div>
    </Modal>
  );
};

export default SearchModal;
