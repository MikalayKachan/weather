import React, { ChangeEvent, useEffect, useState } from 'react';

import { API } from 'api/api';

import { useFetch } from 'hooks/useFetch';

import { Modal } from 'components/shared/Modal';
import { Typography } from 'components/shared/Typography';

import City from './components/City';

import styles from './SearchModal.module.scss';

export type CityType = {
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
  console.log(searchValue);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const { loading, data, setState } = useFetch(
    {
      defaultData: null,
      fetcher: API.getCitiesList,
      stopRequest: searchValue.length < 2,
      immediately: false,
      onSuccess: null,
      onError: null,
    },
    searchValue,
    [searchValue],
  ) as { loading: boolean; data: CityType[]; setState: Function };

  useEffect(() => {
    if (searchValue.length < 2) {
      setState({ loading: false, error: null, data: [] });
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
        onChange={inputHandler}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.cityList}>
          {data?.map((city) => (
            <City key={city.lat} city={city} />
          ))}
        </div>
      )}
    </Modal>
  );
};

export default SearchModal;
