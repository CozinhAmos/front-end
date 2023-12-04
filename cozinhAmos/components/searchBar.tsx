import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const CozinhAmosSearchBar: React.FC<{ onChangeSearch: (query: string) => void, value: string }> = ({ onChangeSearch, value }) => {
  
  const onChangeSearchInternal = (query: string) => {
    onChangeSearch(query);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearchInternal}
      value={value}
    />
  );
};

export default CozinhAmosSearchBar;
