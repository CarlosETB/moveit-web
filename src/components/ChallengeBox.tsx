import styles from "styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const hasActiveChallenge = true;
  return (
    <div className={styles.container}>
      {hasActiveChallenge ? (
        <div className={styles.active}>
          <header>Ganhe 400 px</header>
          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <button type="button" className={styles.failedButton}>
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
