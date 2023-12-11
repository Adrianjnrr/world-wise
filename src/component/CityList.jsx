import styles from "./CityList.module.css";
import Spinner from "../component/Spinner";
import Message from "../component/Message";
import CityItem from "../component/CityItem";
import { useCities } from "../Contexts/CityContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No cities selected " />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
