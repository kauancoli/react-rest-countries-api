export type DataType = {
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: Array<string>;
  capital?: string;
  altSpellings?: Array<string>;
  subregion: string;
  region: string;
  population: number;
  latlng?: Array<number>;
  demonym: string;
  area?: number;
  timezones: Array<string>;
  borders?: Array<string>;
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies?: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName?: string;
  }>;
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa?: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs?: Array<{
    acronym: string;
    name: string;
    otherNames?: Array<string>;
    otherAcronyms?: Array<string>;
  }>;
  cioc?: string;
  independent: boolean;
  gini?: number;
};

export const defaultDataType: DataType = {
  name: '',
  topLevelDomain: [],
  alpha2Code: '',
  alpha3Code: '',
  callingCodes: [],
  subregion: '',
  region: '',
  population: 0,
  demonym: '',
  timezones: [],
  nativeName: '',
  numericCode: '',
  flags: {
    svg: '',
    png: '',
  },
  languages: [
    {
      iso639_1: '',
      iso639_2: '',
      name: '',
      nativeName: '',
    },
  ],
  translations: {
    br: '',
    pt: '',
    nl: '',
    hr: '',
    fa: '',
    de: '',
    es: '',
    fr: '',
    ja: '',
    it: '',
    hu: '',
  },
  flag: '',
  regionalBlocs: [
    {
      acronym: '',
      name: '',
      otherNames: [],
      otherAcronyms: [],
    },
  ],
  cioc: '',
  independent: false,
  gini: 0,
};
