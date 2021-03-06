import { useContext } from "react";

import { ChallengesContext } from "contexts/ChallengesContext";
import styles from "styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <img src="https://github.com/CarlosETB.png" alt="Profile Image" />

      <div>
        <strong>Carlos Tonholi</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
