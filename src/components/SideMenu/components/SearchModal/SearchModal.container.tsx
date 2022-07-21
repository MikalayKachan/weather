import React, { ChangeEvent, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { API } from 'api/api';

import { useFetch } from 'hooks/useFetch';

import SearchModal from './SearchModal';

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

const SearchModalContainer = ({ isSearchModalOpen, onClose }: PropsType) => {
  const [searchValue, setSearchValue] = useState('');
  const [cityToSave, setCityToSave] = useState<null | CityType>(null);

  let history = useHistory();

  const {
    loading: citiesListLoading,
    data: citiesList,
    setState: setCitiesList,
  } = useFetch(
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
      setCitiesList({ loading: false, error: null, data: [] });
    }
  }, [searchValue]);

  const onModalClose = () => {
    onClose();
    setSearchValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleCityClick = (id: number) => {
    const nextCity = citiesList.find((city) => city.lat === id);
    onModalClose();
    nextCity && history.push(`/city?lat=${nextCity.lat}&lon=${nextCity.lon}`);
  };

  const handleAddCityClick = (id: number) => {
    const nextCity = citiesList.find((city) => city.lat === id) as CityType;
    const newCityToSave = {
      name: nextCity.name,
      country: nextCity.country,
      lat: nextCity.lat,
      lon: nextCity.lon,
    };
    nextCity && setCityToSave(newCityToSave);
  };

  useEffect(() => {
    const JSONCities = localStorage.getItem('savedCities');
    const citiesFromStorage = JSONCities && JSON.parse(JSONCities);
    if (citiesFromStorage === null) {
      cityToSave &&
        localStorage.setItem('savedCities', JSON.stringify([cityToSave]));
    } else {
      cityToSave &&
        localStorage.setItem(
          'savedCities',
          JSON.stringify([...citiesFromStorage, cityToSave]),
        );
    }
  }, [cityToSave]);

  return (
    <SearchModal
      isSearchModalOpen={isSearchModalOpen}
      onClose={onModalClose}
      searchValue={searchValue}
      onInputChange={handleInputChange}
      citiesListLoading={citiesListLoading}
      citiesList={citiesList}
      onCityClick={handleCityClick}
      onAddCityClick={handleAddCityClick}
    />
  );
};

export default SearchModalContainer;
