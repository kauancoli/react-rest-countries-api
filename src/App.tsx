import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CountryPage from './CountryPage/CountryPage';
import Home from './Home/Home';

import { useState } from 'react';

function App() {
  const [countriesData, setCountriesData] = useState();

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

export default App;
