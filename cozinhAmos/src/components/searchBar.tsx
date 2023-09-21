import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const CozinhAmosSearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default CozinhAmosSearchBar;
