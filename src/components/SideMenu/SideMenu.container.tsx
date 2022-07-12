import React from 'react';

import { useModal } from 'hooks/useModal';

import SideMenu from './SideMenu';
import { SearchModal } from './components/SearchModal';

const SideMenuContainer = () => {
  const [isSearchModalOpen, openSearchModal, closeSearchModal] = useModal(
    {},
  ) as [boolean, () => void, () => void];
  const handleSearchClick = () => {
    openSearchModal();
  };

  return (
    <>
      <SideMenu onSearchClick={handleSearchClick} />
      <SearchModal
        isSearchModalOpen={isSearchModalOpen}
        onClose={closeSearchModal}
      />
    </>
  );
};

export default SideMenuContainer;
