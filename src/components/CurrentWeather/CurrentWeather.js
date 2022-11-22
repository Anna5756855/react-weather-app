// import { useState } from "react";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div
      className={styles.weatherItem}
      style={{
        backgroundImage: `url(backgrounds/${data.weather[0].icon}.jpeg)`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.mainInfo}>
        <div className={styles.city}>
          {data.name.length > 10 ? data.name.slice(0, 10) + "..." : data.name}
        </div>
        <div className={styles.country}>{data.sys.country}</div>
        <div className={styles.currentWeather}>
          {data.weather[0].description}
        </div>
        <div className={styles.tempRow}>
          <img
            className={styles.weatherIcon}
            alt="weather"
            src={`icons/${data.weather[0].icon}.svg`}
          />
          <div className={styles.temperature}>
            {Math.round(data.main.temp)}°C
          </div>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.additionalInfoColumn}>
          <div className={styles.additionalInfoItem}>
            <div className={styles.characteristics}>Humidity</div>
            <div className={styles.value}>{data.main.humidity}%</div>
          </div>
          <div className={styles.additionalInfoItem}>
            <div className={styles.characteristics}>Pressure</div>
            <div className={styles.value}>{data.main.pressure}hPa</div>
          </div>
        </div>
        <div className={styles.additionalInfoColumn}>
          <div className={styles.additionalInfoItem}>
            <div className={styles.characteristics}>Feels like</div>
            <div className={styles.value}>
              {Math.round(data.main.feels_like)}°C
            </div>
          </div>
          <div className={styles.additionalInfoItem}>
            {" "}
            <div className={styles.characteristics}>Wind</div>
            <div className={styles.value}>{data.wind.speed}m/s</div>
          </div>
        </div>
      </div>
      {/* <div className={styles.moreInfo}>
        <div className={styles.moreInfoItem}>
          <div>Humidity</div>
          <div className={styles.moreInfoData}>{data.main.humidity}%</div>
        </div>
        <div className={styles.moreInfoItem}>
          <div>Pressure</div>
          <div className={styles.moreInfoData}>{data.main.pressure}hPa</div>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.moreInfoItem}>
          <div>Feels like</div>
          <div className={styles.moreInfoData}>
            {Math.round(data.main.feels_like)}°C
          </div>
        </div>
        <div className={styles.moreInfoItem}>
          <div>Wind</div>
          <div className={styles.moreInfoData}>{data.wind.speed}m/s</div>
        </div>
      </div> */}
    </div>
  );
};

export default CurrentWeather;
