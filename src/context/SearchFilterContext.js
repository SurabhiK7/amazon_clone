import React, { createContext, useContext, useState } from 'react';

const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [maxPrice, setMaxPrice] = useState(39000);

  return (
    <SearchFilterContext.Provider value={{
      searchTerm, setSearchTerm,
      selectedCategory, setSelectedCategory,
      maxPrice, setMaxPrice
    }}>
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilter = () => useContext(SearchFilterContext);
