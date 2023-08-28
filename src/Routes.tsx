import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryPage from './CountryPage/CountryPage';
import Home from './Home/Home';
import { DataType, defaultDataType } from './types';

function RouteApp() {
  const [countriesData, setCountriesData] = useState<DataType>(defaultDataType);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setCountriesData={setCountriesData} />}
        />
        <Route
          path="/:countryName"
          element={<CountryPage countriesData={countriesData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
