import styles from "./CountryList.module.css";
import Spinner from "../component/Spinner";
import Message from "../component/Message";
import CountryItem from "../component/CountryItem";
import { useCities } from "../Contexts/CityContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No cities selected " />;

  const countries = cities.reduce((cur, city) => {
    if (!cur.map((el) => el.country).includes(city.country))
      return [...cur, { country: city.country, emoji: city.emoji }];
    else return cur;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
