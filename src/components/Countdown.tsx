import { useState, useEffect } from "react";
import styles from "styles/components/Countdown.module.css";

const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");

  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => {
    setActive(true);
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button onClick={startCountdown} type="button" className={styles.button}>
        Iniciar um ciclo
      </button>
    </div>
  );
};

export default Countdown;
