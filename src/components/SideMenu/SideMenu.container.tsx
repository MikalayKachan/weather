import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useModal } from 'hooks/useModal';

import SideMenu from './SideMenu';
import { SearchModal } from './components/SearchModal';

import { CityType } from 'components/SideMenu/components/SearchModal/SearchModal.container';

const SideMenuContainer = () => {
  const [cities, setCities] = useState([]);
  const [latOfCityToDelete, setLatOfCityToDelete] = useState<number | null>(
    null,
  );

  let history = useHistory();

  const [isSearchModalOpen, openSearchModal, closeSearchModal] = useModal(
    {},
  ) as [boolean, () => void, () => void];

  useEffect(() => {
    const JSONCities = localStorage.getItem('savedCities');
    const citiesFromStorage = JSONCities && JSON.parse(JSONCities);
    setCities((prevCities) =>
      prevCities.length !== citiesFromStorage.length
        ? citiesFromStorage
        : prevCities,
    );
  });

  const handleSearchClick = () => {
    openSearchModal();
  };

  const handleCityClick = (lat: number, lon: number) => {
    history.push(`/city?lat=${lat}&lon=${lon}`);
  };

  const handleDeleteCityClick = (lat: number) => {
    setLatOfCityToDelete(lat);
  };

  useEffect(() => {
    const JSONCities = localStorage.getItem('savedCities');
    const citiesFromStorage = JSONCities && JSON.parse(JSONCities);
    const updatedCitiesForStorage = citiesFromStorage.filter(
      (city: CityType) => city.lat !== latOfCityToDelete,
    );
    localStorage.setItem(
      'savedCities',
      JSON.stringify(updatedCitiesForStorage),
    );
    setLatOfCityToDelete(null);
  }, [latOfCityToDelete]);

  return (
    <>
      <SideMenu
        cities={cities}
        onSearchClick={handleSearchClick}
        onCityClick={handleCityClick}
        onDeleteCityClick={handleDeleteCityClick}
      />
      <SearchModal
        isSearchModalOpen={isSearchModalOpen}
        onClose={closeSearchModal}
      />
    </>
  );
};

export default SideMenuContainer;
