import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../Styles/dark';
import light from '../Styles/light';
import * as S from './styles';

import { Link } from 'react-router-dom';
import Data from '../../data.json';
import { DataType } from '../types';

type HomeProps = {
  setCountriesData: React.Dispatch<React.SetStateAction<DataType>>;
};

const Home: React.FC<HomeProps> = ({ setCountriesData }) => {
  const [theme, setTheme] = useState(dark);
  const [countries] = useState(Data);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  const Regions = [...new Set(countries.map((country) => country.region))];

  const filteredCountries = countries.filter((country) => {
    const matchesRegion =
      selectedRegion === null || country.region === selectedRegion;
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const countriesDataHandle = (countriesData: any) => {
    setCountriesData(countriesData);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Main>
        <S.Header>
          <S.Title>Where is the world?</S.Title>
          <S.Button onClick={toggleTheme}>☾ Dark Mode</S.Button>
        </S.Header>

        <S.Filter>
          <S.Input
            type="text"
            placeholder="Search for a country..."
            onChange={handleNameChange}
          />
          <S.Select defaultValue={0} onChange={handleRegionChange}>
            <option value={0} hidden>
              Filter by Region
            </option>
            {Regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </S.Select>
        </S.Filter>
        <S.CountryList>
          {filteredCountries.map((country) => (
            <Link
              key={country.name}
              to={{
                pathname: `/${country.name}`,
              }}
            >
              <S.CountryCard
                key={country.name}
                onClick={() => countriesDataHandle(country)}
              >
                <S.CardImg src={country.flags.svg} alt={country.name} />

                <S.CardContainer>
                  <S.CardTitle>{country.name}</S.CardTitle>

                  <S.CardInfo>
                    Population: <span>{country.population}</span>
                  </S.CardInfo>
                  <S.CardInfo>
                    Region: <span>{country.region}</span>
                  </S.CardInfo>
                  <S.CardInfo>
                    Capital: <span>{country.capital}</span>
                  </S.CardInfo>
                </S.CardContainer>
              </S.CountryCard>
            </Link>
          ))}
        </S.CountryList>
      </S.Main>
    </ThemeProvider>
  );
};

export default Home;
