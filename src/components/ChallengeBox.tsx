import { useContext } from "react";

import { ChallengesContext } from "contexts/ChallengesContext";

import styles from "styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

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
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.succeedButton}>
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
