import { useContext } from "react";

import { ChallengesContext } from "contexts/ChallengesContext";
import { CountdownContext } from "contexts/CountdownContext";

import styles from "styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceed = () => {
    completedChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.active}>
          <header>Ganhe {activeChallenge.amount} px</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="type icon" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.failedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.succeedButton}
              onClick={handleChallengeSucceed}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
