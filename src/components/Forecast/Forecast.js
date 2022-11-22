import styles from "./Forecast.module.css";

const Forecast = ({ data }) => {
  let months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  return (
    <div className={styles.forecastContainer}>
      {data.list
        .filter((elem) => elem.dt_txt.includes("09:00:00"))
        .map((elem) => (
          <div key={elem.dt_txt} className={styles.forecastItem}>
            <div className={styles.forecastDate}>
              <div className={styles.date}>{elem.dt_txt.slice(8, 10)}</div>
              <div className={styles.month}>
                {months[elem.dt_txt.slice(5, 7) - 1]}
              </div>
            </div>
            <div className={styles.forecastInfo}>
              <img
                className={styles.weatherIcon}
                alt="weather"
                src={`icons-black/${elem.weather[0].icon}.svg`}
              /><div className={styles.forecastTemp}>
              {Math.round(elem.main.temp)}°C
            </div>
            <div className={styles.additionalInfo}>
              <div className={styles.characteristics}>
                <div>Feels like</div>
                <div>Humidity</div>
                <div>Pressure</div>
                <div>Wind</div>
              </div>
              <div className={styles.values}>
                <div>{Math.round(elem.main.feels_like)}°C</div>
                <div>{elem.main.humidity}%</div>
                <div>{elem.main.pressure}hPa</div>
                <div>{elem.wind.speed}m/s</div>
              </div>
            </div></div>
              
          </div>
        ))}
    </div>
  );
};

export default Forecast;
