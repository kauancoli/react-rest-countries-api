import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import dark from '../Styles/dark';
import light from '../Styles/light';
import { DataType } from '../types';
import * as S from './styles';

type CountryPageProps = {
  countriesData: DataType;
};

const CountryPage: React.FC<CountryPageProps> = ({ countriesData }) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Main>
        <S.Header>
          <S.Title>Where is the world?</S.Title>
          <S.Button onClick={toggleTheme}>☾ Dark Mode</S.Button>
        </S.Header>
        <S.Top>
          <Link
            key={countriesData?.name}
            to={{
              pathname: `/`,
            }}
          >
            <S.Button>
              <span>🡠</span> Back
            </S.Button>
          </Link>
        </S.Top>
        {countriesData?.name ? (
          <S.CountryCard key={countriesData.name}>
            <S.CardImg src={countriesData?.flag} alt={countriesData?.flag} />
            <S.CardInfo>
              <S.CardTitle>{countriesData?.name}</S.CardTitle>
              <S.CardText>
                Native Name: <span>{countriesData?.nativeName}</span>
              </S.CardText>
              <S.CardText>
                Population:{' '}
                <span>{countriesData?.population?.toLocaleString() ?? ''}</span>
              </S.CardText>
              <S.CardText>
                Region: <span>{countriesData?.region}</span>
              </S.CardText>
              <S.CardText>
                Sub Region: <span>{countriesData?.subregion}</span>
              </S.CardText>
              <S.CardText>
                Capital: <span>{countriesData?.capital}</span>
              </S.CardText>

              <S.CardText key={countriesData?.name}>
                Borders Countries:
                {countriesData?.borders?.map((borders) => (
                  <button style={{ maxInlineSize: '6rem' }}>
                    {borders ?? ''}
                  </button>
                ))}
              </S.CardText>
            </S.CardInfo>

            <S.CardInfo>
              <S.CardText>
                Top Level Domain:
                <span>
                  {' '}
                  {countriesData?.topLevelDomain?.map((t) => t) ?? ''}
                </span>
              </S.CardText>
              <S.CardText>
                Currencies:
                <span>
                  {' '}
                  {countriesData?.currencies?.map((c) => c.name) ?? ''}
                </span>
              </S.CardText>
              <S.CardText>
                Languages:
                <span>
                  {' '}
                  {countriesData?.languages?.map((l) => l.name).join(', ') ??
                    ''}
                </span>
              </S.CardText>
            </S.CardInfo>
          </S.CountryCard>
        ) : null}
      </S.Main>
    </ThemeProvider>
  );
};

export default CountryPage;
