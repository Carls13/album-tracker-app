const COUNTRY_FLAGS = {
    "Qatar": require('./../../assets/flags/qatar.png'),
    "Ecuador": require('./../../assets/flags/ecuador.png'),
    "Senegal": require('./../../assets/flags/senegal.png'),
}

export const mapCountryToFile = (country) => {
  return COUNTRY_FLAGS[country];
};
