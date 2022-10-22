// eslint-disable-next-line import/namespace
import { Image, StyleSheet } from "react-native";

export const COUNTRY_FLAGS = {
  Qatar: require("./../../../assets/flags/qatar.png"),
  Ecuador: require("./../../../assets/flags/ecuador.png"),
  Senegal: require("./../../../assets/flags/senegal.png"),
  Netherlands: require("./../../../assets/flags/netherlands.png"),
  England: require("./../../../assets/flags/england.png"),
  Iran: require("./../../../assets/flags/iran.png"),
  "United States": require("./../../../assets/flags/united-states.png"),
  Wales: require("./../../../assets/flags/wales.png"),
  Argentina: require("./../../../assets/flags/argentina.png"),
  "Saudi Arabia": require("./../../../assets/flags/saudi-arabia.png"),
  Mexico: require("./../../../assets/flags/mexico.png"),
  Poland: require("./../../../assets/flags/poland.png"),
  Australia: require("./../../../assets/flags/australia.png"),
  Denmark: require("./../../../assets/flags/denmark.png"),
  Tunisia: require("./../../../assets/flags/tunisia.png"),
  Spain: require("./../../../assets/flags/spain.png"),
  "Costa Rica": require("./../../../assets/flags/costa-rica.png"),
  Germany: require("./../../../assets/flags/germany.png"),
  Japan: require("./../../../assets/flags/japan.png"),
  Belgium: require("./../../../assets/flags/belgium.png"),
  Canada: require("./../../../assets/flags/canada.png"),
  Morocco: require("./../../../assets/flags/morocco.png"),
  Croatia: require("./../../../assets/flags/croatia.png"),
  Serbia: require("./../../../assets/flags/serbia.png"),
  Switzerland: require("./../../../assets/flags/switzerland.png"),
  Cameroon: require("./../../../assets/flags/cameroon.png"),
  Portugal: require("./../../../assets/flags/portugal.png"),
  Ghana: require("./../../../assets/flags/ghana.png"),
  Uruguay: require("./../../../assets/flags/uruguay.png"),
  "South Korea": require("./../../../assets/flags/south-korea.png"),
};

export const FlagIcon = ({ size, country }) => {
  const styles = StyleSheet.create({
    countryFlag: {
      width: 50,
      height: 50,
    },
  });

  const mapCountryToFile = () => {
    return COUNTRY_FLAGS[country];
  };

  return <Image style={styles.countryFlag} source={mapCountryToFile()} />;
};
