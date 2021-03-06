import { useContext } from "react";

import { CountdownContext } from "contexts/CountdownContext";
import styles from "styles/components/Countdown.module.css";

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinish,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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

      {hasFinish ? (
        <button disabled className={styles.button}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.button} ${styles.buttonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.button}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
