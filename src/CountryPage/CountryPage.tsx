import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import dark from '../Styles/dark';
import light from '../Styles/light';
import * as S from './styles';

const CountryPage: React.FC = () => {
  const [theme, setTheme] = useState(dark);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const name = searchParams.get('name') || '';
  const nativeName = searchParams.get('nativeName') || '';
  const flag = searchParams.get('flag') || '';
  const population = Number(searchParams.get('population')) || 0;
  const region = searchParams.get('region') || '';
  const subregion = searchParams.get('subregion') || '';
  const capital = searchParams.get('capital') || '';
  const topLevelDomain = (searchParams.get('topLevelDomain') || '').split(',');
  const currencies = JSON.parse(searchParams.get('currencies') || '[]');
  const languages = JSON.parse(searchParams.get('languages') || '[]');
  const borders = (searchParams.get('borders') || '').split(',');

  return (
    <ThemeProvider theme={theme}>
      <S.Main>
        <S.Header>
          <S.Title>Where is the world?</S.Title>
          <S.Button onClick={toggleTheme}>☾ Dark Mode</S.Button>
        </S.Header>
        <S.Top>
          <S.Button>
            <span>🡠</span> Back
          </S.Button>
        </S.Top>
        <S.CountryCard>
          <div>
            <S.CardTitle>Nome {name}</S.CardTitle>
            <S.CardImg src={flag} alt={flag} />
            <S.CardInfo>
              Native Name: <span>{nativeName}</span>
            </S.CardInfo>
            <S.CardInfo>
              Population: <span>{population}</span>
            </S.CardInfo>
            <S.CardInfo>
              Region: <span>{region}</span>
            </S.CardInfo>
            <S.CardInfo>
              Sub Region: <span>{subregion}</span>
            </S.CardInfo>
            <S.CardInfo>
              Capital: <span>{capital}</span>
            </S.CardInfo>
            <S.CardInfo>
              Top Level Domain: <span>{topLevelDomain.join(', ')}</span>
            </S.CardInfo>
            <S.CardInfo>
              Currencies:
              <span>
                {currencies.map((currency: any) => currency.name).join(', ')}
              </span>
            </S.CardInfo>
            <S.CardInfo>
              Language:
              <span>
                {languages.map((language: any) => language.name).join(', ')}
              </span>
            </S.CardInfo>
            <S.CardInfo>
              Language:
              <span>{borders.join(', ')}</span>
            </S.CardInfo>
          </div>
        </S.CountryCard>
      </S.Main>
    </ThemeProvider>
  );
};

export default CountryPage;
